#### 3D Reconstruction
3D reconstruction is a central problem in computer vision, focused on inferring three-dimensional structures from a collection of two-dimensional images. One popular approach to this problem is to simultaneously infer the camera *motion* (position and orientation) and scene *structure* (as a point cloud), a class of methods known as *Structure from Motion* – or *SfM* for short. 

<img src='%PUBLIC_URL%/assets/images/structure-from-motion/simple-pipeline.png' width="400px;"  style="display:block;margin-left:auto;margin-right:auto;" />

The aim of my third-year dissertation project at the University of Cambridge was therefore to design, implement and evaluate a complete SfM pipeline. I focused on two pipeline stages in particular: triangulation, and bundle adjustment.

___

#### Overview
The focus of this project is incremental Structure from Motion, generally formulated as the eight-stage pipeline shown below.

<img src="/assets/images/structure-from-motion/complex-pipeline.png" width="500px;"  style="display:block;margin-left:auto;margin-right:auto;" />

<br>

At a glance, the eight stages are as follows:
1. (Optional) Camera Calibration
2. Feature Extraction
3. Feature Matching
4. Geometric Verification
5. Image Registration
6. Triangulation
7. (Optional) Bundle Adjustment
8. (Optional) Filters

Let's explore each stage in detail.
___

#### Camera Calibration

Camera calibration is the process of estimating a camera's *intrinsic* parameters – its optical centre, focal length, and so on. When combined with a corresponding *extrinsic* matrix $[ R \mid {\bf t}]$, this matrix projects a 3D scene point $\bf X$ to a 2D point ${\bf \hat{x} }$ in the image plane.

$$ {\bf \hat{x}} = K[ R \mid {\bf t} ] {\bf X} $$

The intrinsic parameters are expressed in the matrix $K$,

$$ K = \begin{bmatrix} f_x & s & c_x \\ 0 & f_y & c_y \\ 0 & 0 & 1 \end{bmatrix} $$

in which $(c_x, c_y)$ is the optical centre, $(f_x, f_y)$ is the focal length, and $s$ is a skew coefficient. These parameters are calibrated by taking several photos of a known calibration image (a chess board, for example) with the same camera.
___

#### Feature Extraction
Feature extraction finds for each input image $I_i$ (where $i = 1 \dots N_I$), a set $\mathcal F_i = \{ ({\bf x}_j, {\bf f}_j) \mid j = 1 \dots N_{F_i} \}$ of distinctive features in that image, in which the *key point* ${\bf x}_j$ is the feature's location in image coordinates, while ${\bf f}_j$ is a *descriptor* of the feature's appearance. 

The next step is to match key points across images by comparing descriptors; an ideal descriptor is therefore invariant to scale, orientation, and even lighting. A feature descriptor that satisfies these criteria is SIFT, implemented in OpenCV.

___

#### Feature Matching
Feature matching finds a matching between two sets of features $\mathcal{F}_i$ and $\mathcal{F}_j$ by comparing feature descriptors. The brute force approach, and the one taken by this project, performs this search on each pair of images $(I_i, I_j)$, such that $i < j$, with a total time complexity of $O(N_I^2 N_{F_i}^2)$. The final output of this stage is an $N_I \times N_I$ matrix of feature matches $\mathcal M$, in which each entry $\mathcal M_{ab} \in \mathcal F_a \times \mathcal F_b$ represents the matches between images $I_a$ and $I_b$. $\mathcal M_{ab}$ is therefore a solution to the *correspondence problem*, a set of points in one image which can be identified as the same points in another image; each pair of 2D image points in this set is later used to reconstruct a single 3D scene point.

___

#### Geometric Verification

Features are matched based only on similarity of appearance descriptors, which means some features are, inevitably, incorrectly matched. This is especially true of images with repetitive features, as shown below. The true match is drawn in green; the false match is drawn in red.

<img src="/assets/images/structure-from-motion/newnham-matches.png" width="450px"  style="display:block;margin-left:auto;margin-right:auto" />

Fortunately, these false feature correspondences can be identified and pruned through the process of geometric verification, which defines a geometric transformation between the images.

Specifically, for uncalibrated cameras $I$ and $I'$, we wish to find the fundamental matrix $F$ which satisfies the constraint ${\bf x'}^\top F {\bf x} = 0$, for all such keypoint correspondences ${\bf x}, {\bf x'}$ in homogenous image coordinates.

Alternatively, for calibrated cameras (for which the intrinsic matrix $K$ is known), we estimate the essential matrix $E = (K')^\top F K $, which satisfies ${\bf y'}^\top E {\bf y} = 0$, for all such keypoint correspondences ${\bf y}, {\bf y'}$ expressed in homogeneous, normalised image coordinates.

In either case, this comes down to applying the *epipolar constraint*: for any point ${\bf x}$ in the first image, its match ${\bf x'}$ in the second image is constrained to lie on the *epipolar line* ${\bf l'} = F {\bf x}$ – and vice versa. A feature correspondence that satisfies this condition (within some margin of error) is considered geometrically verified, while outliers are discarded.

___

#### Image Registration

Image registration is the process of estimating the pose of the camera when it captured that image. The pose is represented as a $3 \times 4$  matrix $[R \mid {\bf t}]$ (called the extrinsic matrix), where $R$ and ${\bf t}$ are the camera's rotation and translation, respectively.

On the first iteration of the pipeline, a baseline pair of cameras is registered simultaneously to initialise the reconstruction. The positions of these cameras (relative to each other) is derived from their keypoint correspondences, a relationship expressed through the essential matrix $E$.

Subsequent cameras are registered one at a time using feature matches between the new image and images already registered to the reconstruction, also known as solving the Perspective-n-Point (PnP) problem.

___

#### Triangulation

Triangulation is the problem of determining the location of a 3D scene point $\bf X$ from its measured image points $\bf x$ in more than one image. The scope of this project was limited to two-view triangulation methods which consider a pair of image points $({\bf x}_1, {\bf x}_2)$.

We first assume knowledge of a $3 \times 4$ extrinsic matrix $[R \mid {\bf t}]$ and a $3 \times 3$ intrinsic matrix $K$ for each camera. These are calculated in the camera calibration and image registration stages, respectively. We hence combine these into a single $3 \times 4$ projection matrix $P = K [R \mid {\bf t}]$.

<img src="/assets/images/structure-from-motion/triangulation.png" width="350px"  style="display:block;margin-left:auto;margin-right:auto" />

If we assume *exact* knowledge of these camera matrices and measured image points, the solution to the triangulation problem is actually very simple: the triangulated scene point $\bf X$ solves ${\bf x}_1 = P_1 {\bf X}$ and ${\bf x}_2 = P_2 \bf X$ – in other words, $\bf X$ is the point of intersection of the two backprojected rays, as pictured above.

Of course, this assumption is unrealistic. In practice, these backprojected rays are almost always skew. The problem is therefore to find a scene point that 'best fits' the measured image points.

For this project, I implemented two triangulation methods – *midpoint triangulation* and *linear triangulation* – and compared their performance.

___

#### Bundle Adjustment

The next step of the pipeline is *bundle adjustment* (BA). BA refers to the joint refinement of all camera poses and scene points estimated so far, which are estimated separately in the image registration and triangulation stages but are closely correlated. Uncertainties in triangulation propagate to the next camera pose estimation, and vice versa. This error accumulates over several iterations and can cause the reconstruction to drift to a non-recoverable state.

Bundle adjustment reduces this *scene drift* by leveraging the redundancy provided by additional camera poses and scene points calculated in later iterations to refine earlier estimates.

The typical approach is to minimise a cost function that incorporates camera poses and scene points spanning several iterations. In this project, I implemented a cost function that measured the *total reprojection error*, and used Ceres Solver to minimise this function.

___

#### Filters

Our reconstruction may contain some outlier scene points, which can be removed by filtering.

In particular, I applied *statistical outlier filtering* (which removes points whose average distance to their nearest neighbours exceeds a particular threshold) and *radial outlier filtering* (which removes points with too few neighbours within a given radius) to improve my reconstruction results. 
___

#### Links
To learn more about my project, please check out
- [My dissertation](/assets/documents/structure-from-motion/dissertation.pdf)
- [My GitHub repository](https://github.com/meganelisabethfinch/StructureFromMotion)