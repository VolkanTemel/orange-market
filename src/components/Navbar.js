import './Navbar.css';
import React from 'react';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <img alt={ 'logo' } className={ 'logo' } src={ "https://i.pinimg.com/originals/1e/46/83/1e4683e265c7a70ea001f6b2160d6986.png" } />
            <ul>
                <li>Ana Sayfa</li>
                <li>Ürünler</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
                { props.cartCounter == 0 ? null : (<li>Sepetim: { props.cartCounter }</li>) }
            </ul>
        </div>
    )
}

export default Navbar;
