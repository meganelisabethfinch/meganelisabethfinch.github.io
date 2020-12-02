import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Excerpt from './Excerpt';
import { articles } from './articles';

class Blog extends Component {

    render() {
        return (
        <Col>
            <ul class="cards">
                {articles.filter(article => article.blogFeature).map(article => <Excerpt key={article.id} link={article.id} {...article.blogData.excerptData} />)}
            </ul>
        </Col>
        )
    }
};

export default Blog;