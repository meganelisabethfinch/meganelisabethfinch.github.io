#### 3D Reconstruction
3D reconstruction is a central problem in computer vision, focused on inferring three-dimensional structures from a collection of two-dimensional images. One popular approach to this problem is to simultaneously infer the camera *motion* (position and orientation) and scene *structure* (as a point cloud), a class of methods known as *Structure from Motion* – or *SfM* for short. 

<img src="/assets/images/structure-from-motion/simple-pipeline.png" width="400px;"  style="display:block;margin-left:auto;margin-right:auto;" />

The aim of my third-year dissertation project at the University of Cambridge was therefore to design, implement and evaluate a complete SfM pipeline. I focused on two pipeline stages in particular: triangulation, and bundle adjustment.

#### Triangulation

$$ math test $$
<img src="/assets/images/structure-from-motion/triangulation.png" width="350px"  style="display:block;margin-left:auto;margin-right:auto" />

<img src="/assets/images/structure-from-motion/midpoint.png" width="350px"  style="display:block;margin-left:auto;margin-right:auto" />


#### Bundle Adjustment


#### Links
To learn more about my project, please check out
- [My dissertation](/assets/documents/structure-from-motion/dissertation.pdf)
- [My GitHub repository](https://github.com/meganelisabethfinch/StructureFromMotion)