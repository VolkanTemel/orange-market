import React, { Component } from 'react';


export default class CartList extends Component {
    render() {
        return (
            <div>
                {this.props.cart }
            </div>
        )
    }
}
