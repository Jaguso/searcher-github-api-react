import React, { Component } from 'react';
import { getRepos } from '../../services';
import './Repos.css';
import CardRepo from '../cards/CardRepo';

class Repos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      user: props.match.params.user //prps.match.params.user necesita usar el parametro definido en el servicio
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

  // onChangeInput = (event) => {
  //   const {name, value} = event.target

  //   console.log("evento: ", event);
  //   console.log("valores: ", name, value);
  //   this.setState({[name]: value})
  // }

  render() {
    return(
      <div className="container">
        <ul className="nav navbar-nav d-inline-flex">
          <li className="nav-item"><h3>Repositorios</h3></li>
          <li><a href="/">Regresar a usuarios</a></li>
        </ul>
        {
          this.state.repos.map(repo => (
            <CardRepo
              name={repo.name}
              url={repo.html_url}
              username={repo.owner.login}
            />
          ))
        }
        {/* <ol className="list-group">
          {this.state.repos.map(repo => (
            <li className="list-group-item list-group-item-action" key={repo.id}>
              <a href={repo.html_url}>
                {repo.name}
              </a>
            </li>
          ))}
        </ol> */}
      </div>
    );
  }
}

export default Repos;