import React from 'react';
import { Col } from 'react-bootstrap';
import {
    aboutData
} from '../assets/contents';

const About = () => (
    <Col lg={true} className="article">
            <h1 className="my-brand">{aboutData.heading}</h1>
            <p>
               {aboutData.body}
            </p>
            <p>
                <h4>Contact</h4>
                Email: <a href={"mailto:" + aboutData.contacts.email}>{aboutData.contacts.email}</a>
            </p>
    </Col>
);

export default About;