import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Excerpt = (props) => (
    <li class="cards_item">
        <Card className="card">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">subtitle</Card.Subtitle>
                <Card.Text>{props.featuredText}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </li>
);

export default Excerpt;