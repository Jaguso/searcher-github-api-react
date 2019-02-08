import React, { Component } from 'react';

class SearchList extends Component {
  
  constructor() {
    super();
    this.state = {
      fruits: [
        'apple', 
        'orange', 
        'banana', 
        'watermelon',
        'blue berry'
      ],
      search: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target

    console.log("evento: ", event);
    console.log("valores: ", name, value);
    this.setState({[name]: value})
  }

  render() {
    let filteredFruits = this.state.fruits.filter(
      (fruit) => {
        return fruit.indexOf(this.state.search) !== -1;
      }
    );
    return (
      <div>
        <h3>Search list</h3>
        <label>
          Busca una fruta: 
          <input 
            type="text" 
            name="search" 
            onChange={this.onChangeInput} 
          />
        </label>
        <ul>
          {filteredFruits.map(fruit => (
            <li>
              {fruit}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchList;