import React from 'react';

/* React-Bootstrap imports */
import { Container, Row } from 'react-bootstrap';

import './App.css';
import Main from './components/Main';
import Header from './components/header';

function App() {
  return (
    <Container fluid className="bg-colour bg-splash">
      <Header/>
      <Row className="bg-colour" style={{ paddingTop: '65px' }}>
        <Main/>
      </Row>
    </Container>
  );
}

export default App;
