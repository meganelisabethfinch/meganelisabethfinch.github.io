import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Excerpt = (props) => (
    <li class="cards_item">
        <Card className="card">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">subtitle</Card.Subtitle>
                <Card.Text>{props.feature}</Card.Text>
                <Link to={{pathname: `/blog/${props.id}` }}>
                <Button variant="primary">Go somewhere</Button>
                </Link>
                
            </Card.Body>
        </Card>
    </li>
);

export default Excerpt;