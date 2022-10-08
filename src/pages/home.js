import React, { Component } from 'react';

/* React-Bootstrap imports */
import { Jumbotron, Nav } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-router-dom';


import {
  homeData
} from '../assets/contents';

/* CSS imports */
import '../styles/home.css';

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
               <p class="lead text-light mt-4">
                {homeData.lead}
               </p>
               <p class="lead">
               <Nav.Link className="btn btn-outline-light btn-md" eventKey="1" as={Link} to="/about">{homeData.callToAction.text}</Nav.Link>
               </p>
           </Jumbotron>
        )
    }
}

export default Home;