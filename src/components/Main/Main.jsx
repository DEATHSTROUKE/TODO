import React from 'react';
import './Main.css'
import '../TodayPage/TodayPage'
import TodayPage from "../TodayPage/TodayPage";
import cn from 'classnames'
import store from '../../store/store'
import {observer} from "mobx-react-lite";

const Main = () => {
    return (
        <main className={cn("main", {"opened": store.isMenuOpen})}>
            <div className="container">
                <TodayPage/>
            </div>
        </main>
    );
};

export default observer(Main);
