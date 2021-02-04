import '../App.css';
import Navbar from './Navbar';
import Products from './products/Products';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';

export default class App extends Component {

  state = {
    cartCounter: 0
  };

  addToCart = () => {
    let sum = this.state.cartCounter;
    sum = parseInt(sum + 1);
    this.setState({ cartCounter: sum })
  };

  render() {
    return (
      <div>
        <Navbar cartCounter={ this.state.cartCounter }
        />

        <Switch>
          <Route
            exact
            path="/"
            render={ props => (
              <Products
                { ...props }
                addToCart={ this.addToCart }
              />
            ) }
          />
          <Route
            exact
            path="/sepet"
            render={ props => (
              <CartList
                { ...props }
                cart={ this.state.cart }
                removeFromCart={ this.removeFromCart }
              />
            ) }
          />
          <Route />
          <Route
            component={ NotFound } />
        </Switch>
      </div>
    )
  }
}