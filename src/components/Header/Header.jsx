import React from 'react';
import './Header.css'
import store from '../../store/store'
import cn from 'classnames'
import {observer} from "mobx-react-lite";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__menu">
                        <button className={cn("burger__btn", {"menu-open": store.isMenuOpen})} onClick={() => store.setMenuOpen()}>
                            <span/>
                        </button>
                    </div>
                    <div className="header__profile">
                        <div className="profile__ava">
                            A
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default observer(Header);
