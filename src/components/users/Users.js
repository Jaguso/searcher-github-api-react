import React, { Component } from 'react';
import { getUsers } from '../../services';

class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      search: ""
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

  onChangeInput = (event) => {
    const {name, value} = event.target

    console.log("evento: ", event);
    console.log("valores: ", name, value);
    this.setState({[name]: value})
  }

  render() {

    let names = this.state.users.map(user => user.login)
    
    let filteredUsers = names.filter(
      (name) => {
        return name.indexOf(this.state.search) !== -1;
      }
    );

    return(
      <div>
        <h3>Users</h3>
          <label>
            Buscar un usuario
            <input 
              type="text"
              name="search"
              onChange={this.onChangeInput}
            />
          </label>
          <ul>
            {filteredUsers.map(user => (
              <li>
                {user}
              </li>
            ))}
          </ul>
        
          
      </div>

    );
  }
}

export default Users;