import React, { Component } from 'react';
import { getRepos } from '../../services';
import './Repos.css';

class Repos extends Component {

  constructor() {
    super();
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    getRepos().then((response) => {
      this.setState({
        repos: response.data
      })
      console.log(this.state.repos)
    })
  }

  render() {
    return(
      <div className="container">
        <ul className="nav navbar-nav d-inline-flex">
          <li class="nav-item"><h3>Repositorios</h3></li>
          <li><a href="/">Regresar a usuarios</a></li>
        </ul>
        
        <ol className="list-group">
          {this.state.repos.map(repo => (
            <li className="list-group-item list-group-item-action">
              {repo.description}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Repos;