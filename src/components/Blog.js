import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Excerpt from './Excerpt';
import { articles } from './data';

class Blog extends Component {

    render() {
        return (
        <Col>
            <ul class="cards">
                {articles.map(article => <Excerpt key={article.id} {...article} />)}
            </ul>
        </Col>
        )
    }
};

// {props.excerpts.map(excerpt => <Excerpt key={excerpt.id} {...excerpt} />)}

export default Blog;