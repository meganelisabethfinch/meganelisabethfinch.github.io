import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import IFrame from './IFrame';
import { articles } from './articles';
import ArticleBody from './ArticleBody';

// set article = articles.find(x => x.id == id)
// if (article == undefined), render 404
// else render the article

const Article = ({match:{params:{id}}}) => {
        const post = articles.find(x => x.id === id);
        return (<Col lg={true} className="article">
            <h2 className="custom-brand">{post.excerptData.title}</h2>
            <ArticleBody source={id} />
            <IFrame iframeData={post.iframeData} />
        </Col>)
    
};

export default Article;