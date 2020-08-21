import React, { Component, Text } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';


class Home extends Component {
    render() {
        return (
            <Row>
                <Col className="col-sm-12">
                    <h1 className="text-light">
                        Show me <br />
                        <ReactTypingEffect typingDelay="100" speed="100" text={["something cool"]} />
                    </h1>
                </Col>
            </Row>
        )
    }
}

export default Home;