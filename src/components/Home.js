import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';


class Home extends Component {
    render() {
        return (
            <Row>
                <Col className="col-sm-12 ml-3">
                    <h1 className="text-light">
                        Show me <br />
                        <ReactTypingEffect typingDelay="100" speed="100" text={["a game made in 72 hours"]} />
                    </h1>
                </Col>
            </Row>
        )
    }
}

export default Home;