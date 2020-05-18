import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {


    return (
        <ul className={style.menu}>
            <li><NavLink to="/">Головна</NavLink></li>
            <li><NavLink to="/users">Користувачі</NavLink></li>
        </ul>
    )
}

export default Navbar