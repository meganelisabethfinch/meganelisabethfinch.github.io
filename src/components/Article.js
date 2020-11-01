import React from 'react';
import { Col } from 'react-bootstrap';
import IFrame from './IFrame';
import { articles } from './data';

// set article = articles.find(x => x.id == id)
// if (article == undefined), render 404
// else render the article

function Article({match:{params:{id}}}) {
    const post = articles.find(x => x.id === id);
    
    return (<Col lg={true} className="article">
        <h2 className="custom-brand">{post.title}</h2>
        <IFrame visible={post.type === "Interactive Project"}/>
        <p>
            hi there
        </p>
    </Col>)
};

export default Article;