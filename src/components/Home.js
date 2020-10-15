import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-router-dom';

// this.props.features = [{text: "a game made in under 72 hours", link: 1234}, {text: "a ray tracer", link:5678}] etc...
// then map the text fields to an array e.g. texts=["a game made in X", "a ray tracer"]
// and pass this into the ReactTypingEffect as the text prop
// then overwrite the displayTextRenderer func on the ReactTypingEffect to return an h1 with a link

const features = [{text: "a game made in under 72 hours", link: "/1234"}, {text: "something cool", link: "/5678"}];

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
                    />
               </h1>
           </Jumbotron>
           
        )
    }
}

export default Home;