import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Article from './Article';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Article} />
    </Switch>
);

export default Main;