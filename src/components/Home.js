import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-router-dom';

const features = [{text: "a game made in under 72 hours", id: "1234"}, {text: "something cool", id: "5678"}];

class Home extends Component {
    render() {
        return (
           <Jumbotron className="bg-transparent">
               <h1 className="text-light custom-brand">
                   Show me<br />
                   <ReactTypingEffect 
                    typingDelay={100} 
                    speed={100} 
                    eraseSpeed={50} 
                    text={features.map(feature => feature.text)}
                    displayTextRenderer={(text, i) => {
                        return (
                          <Link className="unstyled-link" to={"/blog/" + features[i].id}>
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