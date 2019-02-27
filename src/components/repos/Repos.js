import React, { Component } from 'react';
import { getRepos } from '../../services';
import './Repos.css';
import CardRepo from '../cards/CardRepo';

class Repos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      user: props.match.params.user, //prps.match.params.user necesita usar el parametro definido en el servicio
      searchRepos: ""
    }
  }

  componentDidMount() {
    getRepos(this.state.user).then((response) => {
      this.setState({
        repos: response.data
      })
      console.log(this.state.repos)
    })
  }

  onChangeInput = (event) => {
    const {name, value} = event.target

    console.log("evento: ", event);
    console.log("valores: ", name, value);
    this.setState({[name]: value})
  }

  render() {

    let filteredRepos = this.state.repos.filter(repo => {
      return repo.name.indexOf(this.state.searchRepos) !== -1
    });

    return(
      <div className="container">
        <h3>Repositorios</h3>
        <a href="/">Regresar a usuarios</a>
        <div className="form-group">
          <label>
            Busca un repositorio de {this.state.user}
            <input
              type="text"
              name="searchRepos"
              onChange={this.onChangeInput}
              className="form-control"
            />
          </label>

        </div>

        
        {
          filteredRepos.map(repo => (
            <CardRepo
              name={repo.name}
              url={repo.html_url}
              username={repo.owner.login}
            />
          ))
        }
      </div>
    );
  }
}

export default Repos;