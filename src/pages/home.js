import React, { Component } from 'react';

/* React-Bootstrap imports */
import { Jumbotron } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';

import {
  homeData
} from '../assets/contents';

class Home extends Component {
    render() {
        return (
           <Jumbotron className="bg-transparent mx-auto px-5">
               <h1 className="text-light my-brand">
                   {homeData.static}<br />
                   <ReactTypingEffect 
                    typingDelay={100} 
                    speed={100} 
                    eraseSpeed={50} 
                    text={homeData.animated}
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
               <p class="lead mt-4">
                {homeData.lead}
               </p>
               <p class="lead">
                <a class="btn btn-primary btn-md" href={homeData.callToAction.href} role="button">{homeData.callToAction.text}</a>
               </p>
           </Jumbotron>
        )
    }
}

export default Home;