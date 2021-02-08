import React, { Component } from 'react';


export default class CartList extends Component {
    render() {
        return (
            <div>
                {this.props.cart.map((cart) => (
                    <h1>{ cart }</h1>
                )) }
            </div>
        )
    }
}
