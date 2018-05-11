import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InvestmentProduct from './investmentProduct.js';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    this.setState({ value: 0 });
  }

  handleInfraValueIncrease = () => {
    this.setState({value: this.state.value + 100});
  }

  render() {

    const infrastructure =
      {
        value:this.state.value,
      };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Simple Investment App</h1>
        </header>
        <div>

        <InvestmentProduct
            value={infrastructure.value}
            onIncrease={this.handleInfraValueIncrease}
            />

        </div>
      </div>
    );
  }
}

export default ProductList;
