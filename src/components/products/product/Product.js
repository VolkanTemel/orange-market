import React, { Component } from 'react';
import image from '../../../assets/product.jpg';
import './Product.css';

class Product extends Component {

    state = { loaded: false }

    componentDidMount() {
        // await this.getData();
        this.setState({ loaded: true });

    };

    // getData = async () => {
    //     await axios.get(`Portakallar.json`)
    //         .then((data) => this.setState({ oranges: data.data }))
    //     console.log(this.state.oranges)
    // };

    render() {

        const renderItems = (this.state.loaded ? this.props.oranges.map(orange => (
            <li className={ 'productList' }
                key={ orange.id }>
                <img src={ image } alt={ 'product' } />
                <p>{ orange.title }</p>
                <span>{ orange.price },00 TL</span>
                <button value={ [ orange.title + " " + orange.price + "TL" ] } onClick={ this.props.addedToCart }>Sepete Ekle</button>
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