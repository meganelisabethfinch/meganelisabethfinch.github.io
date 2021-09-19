import React, { Component } from 'react';

/* React-Bootstrap imports */
import { Jumbotron } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';

/* Routing imports */
import { Link } from 'react-router-dom';
import { articles } from '../components/articles';

class Home extends Component {
    render() {
        var featuredPosts = articles.filter(article => article.jumbotronFeature).map(article => article.jumbotronData);
        return (
           <Jumbotron className="bg-transparent">
               <h1 className="text-light custom-brand">
                   Show me<br />
                   <ReactTypingEffect 
                    typingDelay={100} 
                    speed={100} 
                    eraseSpeed={50} 
                    text={featuredPosts.map(post => post.jumbotronText)}
                    displayTextRenderer={(text, i) => {
                        return (
                          <Link className="unstyled-link" to={"/blog/" + featuredPosts[i].id}>
                            {text.split('').map((char, i) => {
                              const key = `${i}`;
                              return (
                                <span key={key}>{char}</span>
                              );
                            })}
                          </Link>
                        );
                      }}      
                    />
               </h1>
           </Jumbotron>
        )
    }
}

export default Home;