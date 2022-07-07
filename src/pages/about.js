import React from 'react';
import { Col } from 'react-bootstrap';

const About = () => (
    <Col lg={true} className="article">
            <h2 className="my-brand">About Me</h2>
            <p>
                Hi, my name is Megan. I am an MS student at the Music and Audio Computing Lab (MACLab) at KAIST.
            </p>
            <p>
                My main interests are in computer music, computer vision and digital signal processing.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem diam, tincidunt et augue et, condimentum semper nisi. Phasellus euismod ex sit amet lacus consectetur euismod nec non sem. Nullam porttitor mi a cursus tempus. Integer facilisis dapibus urna vitae sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p>
                I made this blog using React to showcase my projects.
            </p>
            <p>
                <h4>Contact</h4>
                Email: <a href="mailto:mef40@cam.ac.uk">mef40@cam.ac.uk</a>
            </p>
    </Col>
);

export default About;