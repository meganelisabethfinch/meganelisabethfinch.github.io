import React from 'react';
import { Col } from 'react-bootstrap';
import BlogCard from '../components/blogCard';
import { articles } from '../constants/articles';

import { 
    blogData
} from '../assets/contents';

/* CSS imports */
import '../styles/blog.css';

const Blog = () => (
    <Col>
        <ul class="cards">
            {blogData.filter(post => post.display).map(post => <BlogCard key={post.id} link={post.id} {...post.card} />)}
        </ul>
    </Col>
);

export default Blog;