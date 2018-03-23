import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './Home';
import ContainerMap from './components/ContainerMap/index';


// History


const Routing = () => (
  <Router >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/google-maps-stateful" component={ContainerMap} />

    </Switch>
  </Router>
);

export default Routing;
