import '../App.css';
import Navbar from './Navbar';
import Products from './products/Products';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    cartCounter: ""
  }
  addToCart = () => {
    let sum = this.state.cartCounter;
    sum = parseInt(sum + 1);
    this.setState({ cartCounter: sum })
    console.log(sum);
  };
  render() {
    return (
      <div>
        <Navbar cartCounter={ this.state.cartCounter } />
        <Products addToCart={ this.addToCart } />
      </div>
    )
  }
}