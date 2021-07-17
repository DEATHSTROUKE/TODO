import React from "react";
import './App.css';
// import Header from "../Header/Header";
// import Menu from "../Menu/Menu";
// import {NavLink} from "react-router-dom";
// import Main from "../Main/Main";
// import Register from "../Register/Register";
import Register from "../Register/Register";
import Login from "../Login/Login";


const App = () => {
    return (
        <div className="wrapper">
            {/*<Login />*/}
            <Register />

            {/*<Header/>*/}
            {/*<div className="content">*/}
            {/*    <Menu/>*/}
            {/*    <Main/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
