import React from 'react';
import s from './HomeScreen.module.css'
import logo from '../../images/Logo_IV.png'
import {useNavigate} from "react-router-dom";

export default function HomeScreen() {
    // const styles = useStyles();
    const navigate = useNavigate()

    return (
        <div className={s.homeScreen}>
            <div className={s.header}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.main}>
                <button
                    onClick={() => navigate('/choose')}
                    className={s.buttonOrder}>
                    Нажмите чтобы заказать
                </button>
            </div>
        </div>
    );
}