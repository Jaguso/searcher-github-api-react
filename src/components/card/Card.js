import React, { Component } from 'react';

class Card extends Component {
  render () {
    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">
              Username: <a href="#">{this.props.login}</a>
            </h5>
            <a href="#" className="card-link">Cuenta de github</a>
          </div>
        </div>
       
      </div>
    );
  }
}

export default Card;