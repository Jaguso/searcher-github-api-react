import React, { Component } from 'react';

class CardUser extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     repos: props.repos
  //   }
  // }

  render () {

    return (
      <div className="col-lg-6 col-sm-6 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <img className="card-img-top" src={this.props.avatar}/>
            <h5 className="card-title">
              Username: <a href={this.props.html_url}>{this.props.login}</a>
            </h5>
            <a href={this.props.html_url} className="card-link">Cuenta de github</a>
            <a href={`/repos/${this.props.login}`} className="card-link">Ver repositorios</a>
          </div>
        </div>
       
      </div>
    );
  }
}

export default CardUser;