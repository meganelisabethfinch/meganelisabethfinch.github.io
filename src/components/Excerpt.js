import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Excerpt = (props) => (
    <li class="cards_item">
        <Card className="card">
        <Link className="unstyled-link" to={{pathname: `/blog/${props.id}` }}>

            <Card.Img variant="top" src={require(`../images/${props.metadata.image}`)} />
            <Card.Body>
                <Card.Title>{props.metadata.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.metadata.type}</Card.Subtitle>
                <Card.Text>{props.metadata.excerptText}</Card.Text>
                
            </Card.Body>
        </Link>

        </Card>
    </li>
);

export default Excerpt;