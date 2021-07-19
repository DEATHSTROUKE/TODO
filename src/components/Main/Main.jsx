import React from 'react';
import './Main.css'
import '../TodayPage/TodayPage'
import TodayPage from "../TodayPage/TodayPage";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <TodayPage/>
            </div>
        </main>
    );
};

export default Main;
