import React, { Component } from 'react';
import Card from '../card/Card';
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

    let users = this.state.users.map(element => {
      return {name: element.login, data: element}
    });

    let filteredUsers = users.filter(user => {
      return user.name.indexOf(this.state.search) !== -1
    });

    return(
      <div className="container">
        <h3 className="my-4">Usuarios</h3>
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
          <div className="row">
            {filteredUsers.map(user => (
              <Card 
                login={user.data.login}
                id={user.data.id}
                node_id={user.data.node_id}
                url={user.data.url}
              />
            ))}
          </div>
        
          
      </div>

    );
  }
}

export default Users;