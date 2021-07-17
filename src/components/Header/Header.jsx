import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__menu">
                        <button className="burger__btn">
                            <span/>
                        </button>
                    </div>
                    <div className="header__profile">
                        <div className="profile__ava">
                            A
                        </div>
                        {/*<div className="popup popup__menu"></div>*/}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
