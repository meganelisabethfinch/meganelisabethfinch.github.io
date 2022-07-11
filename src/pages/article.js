import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import BlogBody from '../components/blogBody';

import {
  blogData
} from '../assets/contents';

class Article extends Component {

    render() {
      var post = blogData.find(post => post.id == this.props.match.params.id)

      return(
        <Col lg={true} className="article">
          <h1 className="my-brand">{post.card.title}</h1>

          <h5>
            {post.card.text}
          </h5>

          <h6 className="mb-2 text-muted d-flex justify-content-between">
            <div>
              {post.card.type} 
            </div>
            <div>
              {post.card.date.toLocaleDateString()}
            </div>
          </h6>

          <hr />

          <div className="px-4 pb-4">
            <BlogBody src={post.body.md} />
          </div>
        </Col>
      )
    }
  }

export default Article;