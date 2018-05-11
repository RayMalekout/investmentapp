import React, {Component} from 'react';
import './App.css';
import ProductList from './App.js'

class InvestmentProduct extends Component {

  constructor(props) {
    super(props);

    this.handleValueIncrease = this.handleValueIncrease.bind(this);
  }

  handleValueIncrease() {
    this.props.onIncrease()
  }
  render() {

    return(

      <div className="App-body">
          <span className="App-span">
          <label> Infrastructure
          </label>
          </span>
                      <button
              name='button-1'
              onClick={this.handleValueIncrease}
            >
              {this.props.value}
            </button>

      </div>
    );

  }
}

  export default InvestmentProduct;
