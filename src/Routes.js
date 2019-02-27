import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './components/users/Users';
import Repos from './components/repos/Repos';
import SearchList from './components/searchList/SearchList';

class Routes extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Users}/>
          {/* <Route exact path="/repos" component={Repos}/> */}
          <Route exact path="/search" component={SearchList} />
          <Route exact path="/repos/:user" component={Repos}/>
        </div>
      </Router>
    );
  }
}

export default Routes;