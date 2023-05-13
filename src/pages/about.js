import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import BlogBody from '../components/blogBody';

import {
    aboutData
} from '../assets/contents';

import '../styles/article.css';

const About = () => (
    <Col lg={true} className="article">
        <div className="row">
            <div className="col-md-8 col-sm-12">
                <h1 className="my-brand">{aboutData.heading}</h1>
                <div>
                    <p>
                        I'm a Master's student in the Music and Audio Computing Lab (<a href="https://mac.kaist.ac.kr">MACLab</a>) at the Korea Advanced Institute of Science and Technology (KAIST).
                        Before coming to KAIST, I completed my Bachelor's degree in Computer Science at the University of Cambridge.
                    </p>    
                    <p>
                        My research interests are Artificial Intelligence, Human-Computer Interaction and Digital Humanities. My current research is related to symbolic music and machine learning.
                    </p>
                    <p>
                        For more information, please see <a href="assets/documents/cv.pdf">my current CV</a>.
                    </p>    
                </div>
                <div>
                    <h4>Teaching</h4>
                    <ul>
                        <li><b>Spring 2023.</b> Supervisor, Further Human-Computer Interaction.</li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                    <li>Email: <a href="mailto:mef40@cantab.ac.uk">mef40@cantab.ac.uk</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-md-4 justify-center d-none d-md-block">
                <img className="rounded-circle my-frame" src='assets/images/profile.png' />
            </div>

        </div>
    </Col>
);

export default About;