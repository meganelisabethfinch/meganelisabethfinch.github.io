import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

import './App.css';
import './Menu.css';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <Container fluid className="bg-colour bg-splash">
      
    <Menu/>
    <Row className="bg-colour" style={{ paddingTop: '65px' }}>
    <Main/>
    </Row>
    </Container>

  );
}

export default App;
