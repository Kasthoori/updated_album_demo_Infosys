import React from 'react';
import './style.scss';
import Logo from '../../assets/google_PNG19645.png';

const Header = () => {

    return (

        <header data-test="headercomp">
            <div className="banner">
                <div className="logo">
                    <img data-test="logoimage" src={Logo} alt="Logo" />
                </div>
                <div data-test="title" className="title">
                    <h2>Album Lists</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;