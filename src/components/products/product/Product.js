import React, { Component } from 'react';
import axios from '../../../axios-order';

class Product extends Component {
    state = {
        oranges: [],
        loaded: false
    };

    async componentDidMount() {
        await this.getData();
        this.setState({ loaded: true });

    }

    getData = async () => {
        await axios.get(`Portakallar.json`)
            .then((data) => this.setState({ oranges: data.data }))
        console.log(this.state.oranges)
    };

    render() {

        const renderItems = (this.state.loaded ? this.state.oranges.map(orange => (
            <li key={ orange.id }>{ orange.title }</li>
        )) : <h1>Loading...</h1>)

        return (
            <div>
                { renderItems }
            </div >
        );
    };
};

export default Product;