import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Blog from './Blog';
import Article from './Article';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Article} />
    </Switch>
);

export default Main;