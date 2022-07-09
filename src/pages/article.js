//import React from 'react';
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Article extends Component {
    render() {
      return(
        <Col lg={true} className="article">
        <h2 className="my-brand">Project title</h2>
        <p>article rendered: {this.props.match.params.id}</p>
        </Col>
      )
    }
  }

export default Article;