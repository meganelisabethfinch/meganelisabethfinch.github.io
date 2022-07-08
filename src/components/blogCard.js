import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/blogCard.css';

const BlogCard = (props) => (
    <li class="cards_item">
        <Card className="blogCard card border-0">
        <Link className="unstyled-link" to={{pathname: `/blog/${props.link}` }}>

            <Card.Img className="blogCardImg" variant="top" src={require(`../images/ray-tracer.png`)} />
            <Card.Body>
                <Card.Title className="my-brand">{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.type}</Card.Subtitle>
                <Card.Text>{props.excerptText}</Card.Text>
                
            </Card.Body>
        </Link>

        </Card>
    </li>
);

export default BlogCard;