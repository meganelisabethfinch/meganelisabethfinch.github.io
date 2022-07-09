import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/blogCard.css';

const BlogCard = (props) => (
    <li class="cards_item">
        <Card className="blogCard card border-0">
        <Link className="unstyled-link" to={{pathname: `/blog/${props.link}` }}>

            <Card.Img className="blogCardImg" variant="top" src={require(`../assets/images/${props.img}`)} />
            <Card.Body>
                <Card.Title><b>{props.title}</b></Card.Title>
                
                <Card.Text>{props.text}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
                    <div>{props.type}</div>
                    <div>{props.date.toLocaleDateString()}</div>
                </Card.Subtitle>
            </Card.Body>
        </Link>

        </Card>
    </li>
);

export default BlogCard;