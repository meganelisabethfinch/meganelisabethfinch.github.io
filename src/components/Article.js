import React from 'react';
import { Col } from 'react-bootstrap';
import IFrame from './IFrame';
import { articles } from './articles';

// set article = articles.find(x => x.id == id)
// if (article == undefined), render 404
// else render the article

function Article({match:{params:{id}}}) {
    const post = articles.find(x => x.id === id);
    if (post === undefined) {
        const notFound = articles.find(x => x.id === "404");
    } else {
        return (<Col lg={true} className="article">
            <h2 className="custom-brand">{post.blogData.excerptData.title}</h2>
            <div dangerouslySetInnerHTML={post.blogData.body}/>
            <IFrame iframeData={post.blogData.iframeData} />
        </Col>)
    }
};

export default Article;