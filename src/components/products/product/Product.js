import React, { Component } from 'react';
import image from '../../../assets/product.jpg';
import './Product.css';
import alertify from "alertifyjs";

class Product extends Component {
    state = {
        oranges: [
            { id: 1, price: 10, title: "Washington Portakal" },
            { id: 2, price: 5, title: "Yerli Portakal" } ],
        loaded: false,
        cartCounter: 0
    };

    componentDidMount() {
        // await this.getData();
        this.setState({ loaded: true });

    };

    addedToCart = (e) => {
        alertify.success(e.target.value + " Sepete Eklendi");
        this.props.addToCart()
    };

    // getData = async () => {
    //     await axios.get(`Portakallar.json`)
    //         .then((data) => this.setState({ oranges: data.data }))
    //     console.log(this.state.oranges)
    // };

    render() {

        const renderItems = (this.state.loaded ? this.state.oranges.map(orange => (
            <li className={ 'productList' }
                key={ orange.id }>
                <img src={ image } alt={ 'product' } />
                <p>{ orange.title }</p>
                <span>{ orange.price },00 TL</span>
                <button value={ orange.title } onClick={ this.addedToCart }>Sepete Ekle</button>
            </li >

        )) : <h1>Loading...</h1>)

        return (
            <div>
                { renderItems }
            </div>
        );
    };
};

export default Product;