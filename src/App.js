import React, { lazy, Suspense } from 'react';

/* React-Bootstrap imports */
import { Container, Row } from 'react-bootstrap';

import './styles/app.css';
import Header from './components/header';

/* Routing imports */
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import ('./pages/home'));
const About = lazy(() => import ('./pages/about'));
const Article = lazy(() => import ('./pages/article'));
const Blog = lazy(() => import ('./pages/blog'));

function App() {
  return (
    <Container fluid className="bg-colour bg-splash">
      <Header/>
      <Row className="bg-colour" style={{ paddingTop: '65px' }}>
        <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={Article} />
        </Switch>
        </Suspense>
        </BrowserRouter>
      </Row>
    </Container>
  );
}

export default App;
