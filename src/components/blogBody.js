import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import '../styles/blogBody.css';

class BlogBody extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(require(`../assets/posts/${this.props.src}`)).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        console.log(this.props.source);
        const { markdown } = this.state;
        return (
            <div className="px-4">
                <ReactMarkdown source={markdown} />
            </div>
        );
    }
}

export default BlogBody; 