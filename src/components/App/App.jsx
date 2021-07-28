import React from "react";
import './App.css';
import Header from "../Header/Header";
import Menu from "../Menu/Menu"
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import {Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import store from "../../store/store";
import {observer} from "mobx-react-lite";


const App = () => {
    React.useEffect(() => {
        (async () => {
            let token = localStorage.getItem('token')
            if (token) {
                token = JSON.parse(token)
                const {data} = await axios.post('/check-token', {
                    email: token.email,
                    token: token.token,
                })
                if (data.status === 'success') {
                    store.setAuth(true)
                    store.setEmail(token.email)
                }
            }
        })()
    }, [])

    return (
        <div className="wrapper">
            <Switch>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/'>
                    {store.isAuth ? <>
                        <Header/>
                        <div className="main__content">
                            <Menu/>
                            <Main/>
                        </div>
                    </> : 123123}
                </Route>
                <Redirect to='/'/>
            </Switch>
        </div>
    );
}

export default observer(App);
