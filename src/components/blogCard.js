import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = (props) => (
    <li class="cards_item">
        <Card className="card">
        <Link className="unstyled-link" to={{pathname: `/blog/${props.link}` }}>

            <Card.Img variant="top" src={require(`../images/${props.image}`)} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.type}</Card.Subtitle>
                <Card.Text>{props.excerptText}</Card.Text>
                
            </Card.Body>
        </Link>

        </Card>
    </li>
);

export default BlogCard;