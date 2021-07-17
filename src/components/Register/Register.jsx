import React, {useState} from 'react';
import './Register.css'

const Register = () => {
    const [hidePass, setHidePass] = useState(true)
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
                        <input type="text" className="input"/>
                    </label>
                    <label className="label">
                        <div className="label__title">Email</div>
                        <input type="email" className="input"/>
                    </label>
                    <label className="label label-pass">
                        <div className="label__title">Пароль</div>
                        <input type={hidePass ? "password" : "text"} className="input input-pass"/>
                        <button className="pass__hide" onClick={() => setHidePass(h => !h)}>
                            {hidePass ? <i className="far fa-eye"/> :
                                <i className="far fa-eye-slash"/>}
                        </button>
                    </label>
                    <button className="form__btn">Регистрация</button>
                </div>
                <div className="has__akk">
                    Есть аккаунт? <a href="#" className="change_form">Вход</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
