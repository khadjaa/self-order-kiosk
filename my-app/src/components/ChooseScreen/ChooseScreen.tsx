import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {chooseOrderTypeAC} from "../../store/orderInfoReducer";

const ChooseScreen = () => {

    const orderType = useSelector((state: AppStoreType) => state.info.order)
    const dispatch = useDispatch()

    const chooseOrderTypeHandler = (orderType: string) => {
        dispatch(chooseOrderTypeAC(orderType))
    }

    return (
        <div>
            <div className="card">
                <h2>В зале</h2>
                <p>Тренируйтесь дома или на улице в любое время, удобное для вас!</p>
                <button onClick={() => chooseOrderTypeHandler('В ЗАЛЕ')}>Выбрать</button>
            </div>

            <div className="card">
                <h2>С собой</h2>
                <p>Посетите наш современный тренажерный зал и получите квалифицированную помощь тренера!</p>
                <button onClick={() => chooseOrderTypeHandler('С СОБОЙ')}>Выбрать</button>
            </div>
            <h1>
                {orderType.orderType}
            </h1>
        </div>
    );
};

export default ChooseScreen;