import React, { Component } from 'react';

import { getUsers } from '../../services';

class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getUsers().then((response) => {
      this.setState({
        users: response.data
      })
      console.log(this.state.users)
    })
  }

  render(){
    return(
      <div>
        <h3>Users</h3>
          <ul>
            {this.state.users.map(user => (
              <li>
                {user.login}
              </li>
            ))}
          </ul>
        
          
      </div>

    );
  }
}

export default Users