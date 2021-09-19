import React from 'react';
import { Col } from 'react-bootstrap';
import BlogCard from '../components/blogCard';
import { articles } from '../constants/articles';

const Blog = () => (
    <Col>
        <ul class="cards">
            {articles.filter(article => article.blogFeature).map(article => <BlogCard key={article.id} link={article.id} {...article.excerptData} />)}
        </ul>
    </Col>
);

export default Blog;