import React, { Component } from 'react';
import { Row, Col, Container, CardDeck, Card } from 'react-bootstrap';
import Excerpt from './Excerpt';

const excerpts = [{ title: 'Ray tracer', featuredText: 'my text'}, 
{ title: 'Cosmic Taxi', featuredText: 'a game made in 72 hours with friends'},
{ title: 'A cool project', featuredText: 'Idk what it is, but it\'s cool' },
{ title: 'Compiler', featuredText: 'x'},
{ title: 'X', featuredText: 'y'},
{ title: 'X', featuredText: 'y'},
{ title: 'X', featuredText: 'y'},
{ title: 'X', featuredText: 'y'},
{ title: 'X', featuredText: 'y'},
{ title: 'X', featuredText: 'y'}
];

class Blog extends Component {

    render() {
        return (
        <Col>
            <ul class="cards">
                {excerpts.map(excerpt => <Excerpt key={excerpt.id} {...excerpt} />)}
            </ul>
        </Col>
        )
    }
};

// {props.excerpts.map(excerpt => <Excerpt key={excerpt.id} {...excerpt} />)}

export default Blog;