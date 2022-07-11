import React from 'react';
import { Col } from 'react-bootstrap';

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
            <p>
                <h4>Contact</h4>
                Email: <a href={"mailto:" + aboutData.contacts.email}>{aboutData.contacts.email}</a>
            </p>
    </Col>
);

export default About;