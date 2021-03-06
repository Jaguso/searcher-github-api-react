import React, { Component } from 'react';
import CardUser from '../cards/CardUser';
import { getUsers } from '../../services';
import './Users.css';

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
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  render() {

    let users = this.state.users.map(element => {
      return {name: element.login, data: element}
    });

    let filteredUsers = users.filter(user => {
      return user.name.indexOf(this.state.search) !== -1
    });

    return(
      <div className="container">
        <h3>Usuarios</h3>
          <div className="form-grup">
            <label >
              Busca un usuario:
              <input 
                type="text"
                name="search"
                onChange={this.onChangeInput}
                className="form-control"
              />
            </label>
          </div>
          <div id="users-container">
            <div id="users" className="row">
              {filteredUsers.map(user => (
                <CardUser 
                  login={user.data.login}
                  html_url={user.data.html_url}
                  avatar={user.data.avatar_url}
                />
              ))}
            </div>
          </div>
        
          
      </div>

    );
  }
}

export default Users;