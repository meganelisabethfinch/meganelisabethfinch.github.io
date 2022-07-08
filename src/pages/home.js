import React, { Component } from 'react';

/* React-Bootstrap imports */
import { Jumbotron } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';

/* Routing imports */
import { Link } from 'react-router-dom';
import { articles } from '../constants/articles';

class Home extends Component {
    render() {
        var headlines = ["I write code.", "I make music."];
        return (
           <Jumbotron className="bg-transparent">
               <h1 className="text-light my-brand">
                   Hi, I'm Megan.<br />
                   <ReactTypingEffect 
                    typingDelay={100} 
                    speed={100} 
                    eraseSpeed={50} 
                    text={headlines}
                    displayTextRenderer={(text, i) => {
                        return (
                          <div>
                            {text.split('').map((char, i) => {
                              const key = `${i}`;
                              return (
                                <span key={key}>{char}</span>
                              );
                            })}
                          </div>
                        );
                      }}      
                    />
               </h1>
           </Jumbotron>
        )
    }
}

export default Home;