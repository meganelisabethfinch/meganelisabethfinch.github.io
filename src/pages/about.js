import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import BlogBody from '../components/blogBody';

import {
    aboutData
} from '../assets/contents';

import '../styles/article.css';

const About = () => (
    <Col lg={true} className="article">
        <div className="flex-container">
            <div className="col-md-8">
                <h1 className="my-brand">{aboutData.heading}</h1>
                <div>
                    <BlogBody src="intro.md" />
                </div>
            </div>

            <div className="col-md-4 justify-center">
                <img className="my-frame" src='assets/images/graduation.png' />
            </div>

        </div>
    </Col>
);

export default About;