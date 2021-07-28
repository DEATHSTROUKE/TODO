import React, {useState} from 'react';
import './Register.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [hidePass, setHidePass] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onRegister = async () => {
        const {data} = await axios.post(`/registration`, {
            user: name,
            email,
            password,
        })
        if (data.status === 'success') {
            console.log('success')
        } else if (data.status === 'denied') {
            console.log('denied')
        }
    }
    return (
        <div className="content">
            <div className="form">
                <div className="logo">
                    TODO
                </div>
                <div className="form__title">
                    <h1>Регистрация</h1>
                </div>
                <div className="inputs">
                    <label className="label">
                        <div className="label__title">Имя</div>
                        <input type="text" className="input" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="label">
                        <div className="label__title">Email</div>
                        <input type="email" className="input" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label className="label label-pass">
                        <div className="label__title">Пароль</div>
                        <input type={hidePass ? "password" : "text"} className="input input-pass"
                               value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className="pass__hide" onClick={() => setHidePass(h => !h)}>
                            {hidePass ? <i className="far fa-eye"/> :
                                <i className="far fa-eye-slash"/>}
                        </button>
                    </label>
                    <button className="form__btn" onClick={onRegister}>Регистрация</button>
                </div>
                <div className="has__akk">
                    Есть аккаунт? <NavLink to="/login" className="change_form">Вход</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;
