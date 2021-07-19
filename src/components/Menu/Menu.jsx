import React, {useState} from 'react';
import './Menu.css'
import Popup from "../Popup/Popup";
import cn from 'classnames'
import store from '../../store/store'
import {observer} from "mobx-react-lite";

const Menu = () => {
    const [showAddProject, setShowAddProject] = useState(false)
    const [menuProjectsOpen, setMenuProjectsOpen] = useState(true);
    const now = React.useRef(new Date());
    return (
        <div className={cn("menu", {"opened": store.isMenuOpen})}>
            <div className="sidebar">
                <div className="sidebar__main">
                    <a href='#' className="sidebar__row active">
                        <div className="left__icon">
                            <i className="fas fa-home"/>
                        </div>
                        <div className="sidebar__item">
                            Главная
                        </div>
                    </a>
                    <a href='#' className="sidebar__row row-svg">
                        <div className="left__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <g fill="currentColor" fillRule="evenodd">
                                    <path fillRule="nonzero"
                                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                                          opacity=".1"></path>
                                    <path fillRule="nonzero"
                                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path>
                                    <text
                                        fontSize="9" transform="translate(4 2)" fontWeight="500">
                                        <tspan x="8" y="15" textAnchor="middle">{now.current.getDate()}</tspan>
                                    </text>
                                </g>
                            </svg>
                        </div>
                        <div className="sidebar__item">
                            Сегодня
                        </div>
                    </a>
                    <a href='#' className="sidebar__row">
                        <div className="left__icon">
                            <i className="fas fa-calendar-alt"/>
                        </div>
                        <div className="sidebar__item">
                            Предстоящее
                        </div>
                    </a>
                </div>
                <div className="sidebar__projects">
                    <div className="projects__title">
                        <div className="projects__left" onClick={() => setMenuProjectsOpen(s => !s)}>
                            <i className={cn("fas fa-chevron-down", {"opened": menuProjectsOpen})}/>
                            <div className="title__text">Проекты</div>
                        </div>
                        <div className="projects__add" onClick={() => setShowAddProject(true)}><i
                            className="fas fa-plus"/></div>
                    </div>
                    {<div className={cn('projects__wrapper', {'opened': menuProjectsOpen})}>
                        <div className="projects__row active">
                            <div className="projects__row-left">
                                <div className="projects__dnd">
                                    <i className="fas fa-ellipsis-v"/>
                                    <i className="fas fa-ellipsis-v"/>
                                </div>
                                <div className="projects__color"/>
                                <div className="projects__name">TODO list</div>
                            </div>
                            <button><i className="fas fa-ellipsis-h"/></button>
                        </div>
                        <div className="projects__row">
                            <div className="projects__row-left">
                                <div className="projects__dnd">
                                    <i className="fas fa-ellipsis-v"/>
                                    <i className="fas fa-ellipsis-v"/>
                                </div>
                                <div className="projects__color"/>
                                <div className="projects__name">TODO list</div>
                            </div>
                            <button><i className="fas fa-ellipsis-h"/></button>
                        </div>
                    </div>}
                </div>
            </div>
            <div className={cn("shadow", {"opened": store.isMenuOpen})}/>
            <Popup visible={showAddProject} setVisible={setShowAddProject}>
                <div className="projects__row">
                    <div className="projects__row-left">
                        <div className="projects__dnd">
                            <i className="fas fa-ellipsis-v"/>
                            <i className="fas fa-ellipsis-v"/>
                        </div>
                        <div className="projects__color"/>
                        <div className="project__title">TODO list</div>
                    </div>
                    <button><i className="fas fa-ellipsis-h"/></button>
                </div>
            </Popup>
        </div>
    );
};

export default observer(Menu);
