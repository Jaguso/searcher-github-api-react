import React, { Component } from 'react';
import { getRepos } from '../../services';

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
      <div>
        <h3>These are the repositories</h3>
        <ul>
          {this.state.repos.map(repo => (
            <li>
              {repo.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Repos;