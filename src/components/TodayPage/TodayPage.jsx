import React from 'react';
import './TodayPage.css'
import AddTask from "../AddTask/AddTask";

const TodayPage = () => {
    let now = React.useRef(new Date())
    return (
        <div className="today">
            <div className="today__row">
                <div className="today__left">
                    <div className="today__title">
                        Сегодня
                    </div>
                    <div className="today__date">
                        {String(now.current).split(' ').slice(0, 4).join(' ')}
                    </div>
                </div>
                <div className="today__right">
                    <button>
                        <i className="fas fa-sort-amount-up"/> Сортировать
                    </button>
                </div>
            </div>
            <div className="today__todo">
                <div className="todo__item">
                    <div className="todo__left">
                        <button className="move">
                            <i className="fas fa-ellipsis-v"/>
                            <i className="fas fa-ellipsis-v"/>
                        </button>
                        <button className="check">
                            <i className="fas fa-check"/>
                        </button>
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, facilis itaque labore libero molestias nihil nisi nostrum nulla quaerat rerum similique totam, unde! Accusamus at atque dolorum earum error exercitationem inventore molestiae molestias natus optio, provident sequi, tenetur vel veniam, voluptatum. Adipisci autem hic nisi vel? Architecto atque consectetur cumque dolore enim quia quisquam sed voluptatem? Adipisci aliquid, consectetur ducimus ea explicabo hic, ipsa ipsum, labore nemo quia quo reiciendis unde vitae. Aut expedita in ipsum magnam minus molestias officiis provident quia saepe vero. A cum, deleniti distinctio dolores, doloribus ducimus esse iure modi perferendis provident quam quos reiciendis voluptatum.
                        </div>
                    </div>
                    <div className="todo__right">
                        <button className="edit">
                            <i className="fas fa-pencil-alt"/>
                        </button>
                        <button className="delete">
                            <i className="far fa-trash-alt"/>
                        </button>
                    </div>
                </div>
                <div className="todo__item">
                    <div className="todo__left">
                        <button className="move">
                            <i className="fas fa-ellipsis-v"/>
                            <i className="fas fa-ellipsis-v"/>
                        </button>
                        <button className="check">
                            <i className="fas fa-check"/>
                        </button>
                        <div className="text">
                            Продолжить изучать верстку и css
                        </div>
                    </div>
                    <div className="todo__right">
                        <button className="edit">
                            <i className="fas fa-pencil-alt"/>
                        </button>
                        <button className="delete">
                            <i className="far fa-trash-alt"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="today__add-todo">
                <button className="add">
                    <div className="add__icon">
                        <i className="fas fa-plus"/>
                    </div>
                    <div className="add__text">Добавить задачу</div>
                </button>
            </div>
        </div>
    );
};

export default TodayPage;
