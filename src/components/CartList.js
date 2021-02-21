import React, { Component } from 'react';
import './CartList.css'


export default class CartList extends Component {
    render() {
        return (
            <div className={ "cartList" }>
                {this.props.cart.map((cart) => (
                    <p>{ cart }</p>
                )) }
            </div>
        )
    }
}
