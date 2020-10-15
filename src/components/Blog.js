import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Excerpt from './Excerpt';

const excerpts = [{ title: 'Ray tracer', featuredText: 'my text'}, { title: 'Ludum Dare 47', featuredText: 'a game made in 72 hours'}];

const Blog = () => (
    <div>
        {excerpts.map(excerpt => <Excerpt key={excerpt.id} {...excerpt} />)}
    </div>
);

// {props.excerpts.map(excerpt => <Excerpt key={excerpt.id} {...excerpt} />)}

export default Blog;