import React from 'react';
import { Col } from 'react-bootstrap';
import { articles } from './data';

// set article = articles.find(x => x.id == id)
// if (article == undefined), render 404
// else render the article

function Article({match:{params:{id}}}) {
    const article = articles.find(x => x.id == id);
    if (article == undefined) {
        article = articles.find(x => x.id == "404");
    } 
    return <Col lg={true} className="article">
        <h2 className="custom-brand">{article.title}</h2>
        <iframe frameborder="0" src="https://itch.io/embed-upload/2916835?color=ffffff" allowfullscreen="" width="1100" height="750">
            <a href="https://imaginaryaround.itch.io/cosmic-taxi">Play Cosmic Taxi on itch.io</a>
        </iframe>
        <p>
            hi there
        </p>
    </Col>
    
};

export default Article;