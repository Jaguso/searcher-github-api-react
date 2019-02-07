import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Users from './components/users/Users';
import Repos from './components/repos/Repos';

class Routes extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Users}/>
          <Route exact path="/repos" component={Repos}/>
        </div>
      </Router>
    );
  }
}

export default Routes;