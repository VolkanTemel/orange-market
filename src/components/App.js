import '../App.css';
import Navbar from './Navbar';
import Products from './products/Products';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import alertify from "alertifyjs";

export default class App extends Component {

  state = {
    oranges: [
      { id: 1, price: 10, title: "Washington Portakal" },
      { id: 2, price: 5, title: "Yerli Portakal" } ],
    cartCounter: 0,
    cart: []
  };

  addToCart = () => {
    let sum = this.state.cartCounter;
    sum = parseInt(sum + 1);
    this.setState({ cartCounter: sum })
  };

  addedToCart = (e) => {
    alertify.success(e.target.value + " Sepete Eklendi");
    this.state.cart.push(e.target.value);
    console.log(this.state.cart)
    this.addToCart()
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
                oranges={ this.state.oranges }
                addedToCart={ this.addedToCart }
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
          <Route path="*"
            component={ NotFound } />
        </Switch>
      </div>
    )
  }
}