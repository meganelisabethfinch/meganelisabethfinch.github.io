import React from 'react';
import { Row, Col } from 'react-bootstrap';

import BlogBody from '../components/blogBody';

import {
    aboutData
} from '../assets/contents';

const About = () => (
    <Col lg={true} className="article">
            <h1 className="my-brand">{aboutData.heading}</h1>
            <div>
                <BlogBody src="intro.md" />
            </div>
    </Col>
);

export default About;