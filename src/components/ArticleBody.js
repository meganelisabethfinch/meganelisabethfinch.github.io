import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class ArticleBody extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }
    
    componentDidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(require(`../articles/${this.props.source}.md`)).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }
    
    render() {
        console.log(this.props.source);
        const { markdown } = this.state;
        return <ReactMarkdown source={markdown} />;
    }
}

export default ArticleBody;