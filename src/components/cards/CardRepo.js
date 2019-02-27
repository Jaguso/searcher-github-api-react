import React, { Component } from 'react';

class CardRepo extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="card h-100">
          <div className="card-body">
            <p>Nombre del repositorio: {this.props.name}</p>
            <a href={this.props.url}><p>{this.props.url}</p></a>
          </div>

        </div>
      </div>
    )
  }
}

export default CardRepo;