import React, { Component } from 'react';
import axios from '../../../axios-order';

class Product extends Component {
    state = {

    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        await axios.get(`Portakallar.json`)
            .then((data) => this.setState({ oranges: data.data }))
        console.log(this.state.oranges)
    };

    render() {

        return (
            <div>

            </div>
        );
    }
}

export default Product;