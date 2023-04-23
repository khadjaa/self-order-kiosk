import React from 'react';
import {useDispatch} from "react-redux";
import {chooseOrderTypeAC} from "../../store/orderInfoReducer";
import logo from "../../images/Logo_IV.png";
import logoSpb from '../../images/logo_sbp.png'
import avaSoboy from '../../images/soboy.png'
import vzale from '../../images/Vzale.png'
import h from '../HomeScreen/HomeScreen.module.css'
import s from './ChooseScreen.module.css'
import {useNavigate} from "react-router-dom";

const ChooseScreen = () => {

    // const orderType = useSelector((state: AppStoreType) => state.info.order)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const chooseOrderTypeHandler = (orderType: string) => {
        dispatch(chooseOrderTypeAC(orderType))
        navigate('/order')
    }

    return (
        <div className={s.choose}>
            <div className={h.header}>
                <img src={logo} alt="logotype"/>
            </div>
            <div className={s.cards}>
                <div
                    onClick={() => chooseOrderTypeHandler('В ЗАЛЕ')}
                    className={s.card}>
                    <img src={vzale} alt="vzale"/>
                    <h1>В ЗАЛЕ</h1>
                </div>
                <div
                    onClick={() => chooseOrderTypeHandler('С СОБОЙ')}
                    className={s.card}>
                    <img src={avaSoboy} alt="soboy"/>
                    <h1>С СОБОЙ</h1>
                </div>
            </div>
            <div className={s.qr}>
                <span><b>ВНИМАНИЕ! </b>
                Оплата заказа по <b>QR</b> коду </span>
                <img src={logoSpb} alt="logosbp"/>
            </div>
        </div>
    );
};

export default ChooseScreen;