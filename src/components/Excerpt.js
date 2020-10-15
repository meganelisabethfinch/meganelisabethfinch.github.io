import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Excerpt = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.featuredText}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
);

export default Excerpt;