import './Navbar.css';
import React from 'react';
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = (props) => {

    return (
        <div className="navbar">
            <img alt={ 'logo' } className={ 'logo' } src={ "https://i.pinimg.com/originals/1e/46/83/1e4683e265c7a70ea001f6b2160d6986.png" } />
            <ul>
                <Link className="link" to="/">Ana Sayfa</Link>
                <Link className="link" to="hakkimizda">Hakkımızda</Link>
                <Link className="link" to="iletisim">İletişim</Link>
                { props.cartCounter === 0 ? null : (<Link className="link" to="sepet"> { props.cartCounter }<FiShoppingCart /></Link>) }
            </ul >
        </div >
    )
}

export default Navbar;
