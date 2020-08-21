import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class About extends Component {
    render() {
        return (
            <Row>
                <Col className="col-sm-9 bg-light">
                    <h2>About Me</h2>
                    <p className="text-serif">
                        lorem ipsum
                    </p>
                </Col>
            </Row>
        )
    }
}

export default About;