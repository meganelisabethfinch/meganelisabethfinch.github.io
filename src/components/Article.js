import React from 'react';
import { Col } from 'react-bootstrap';
import { articles } from './data';

// set article = articles.find(x => x.id == id)
// if (article == undefined), render 404
// else render the article

const Article = ({match:{params:{id}}}) => (
    <Col lg={true} className="article">
        <h2 className="custom-brand">{articles.find(x => x.id == id).title}</h2>
        <p>
            hi there
        </p>
    </Col>
);

export default Article;