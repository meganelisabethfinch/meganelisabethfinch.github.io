import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Excerpt = (props) => (
    <li class="cards_item">
        <Card className="card">
        <Link className="unstyled-link" to={{pathname: `/blog/${props.id}` }}>

            <Card.Img variant="top" src={require(`../images/${props.image}`)} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">subtitle</Card.Subtitle>
                <Card.Text>{props.feature}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
                
            </Card.Body>
        </Link>

        </Card>
    </li>
);

export default Excerpt;