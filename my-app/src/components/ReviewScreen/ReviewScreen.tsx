import React from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {ProductsType} from "../../store/orderInfoReducer";
import s from "../OrderScreen/OrderScreen.module.css";
import r from './ReviewScreen.module.css'

export const ReviewScreen = () => {

    const orderItems = useSelector<AppStoreType, ProductsType[]>(state => state.info.order.orderItems, shallowEqual)

    let sum = 0

    return (
        <div className={r.review}>
            <p>ВАШ ЗАКАЗ</p>
            <div>
                {orderItems.map(el => {
                    sum += el.price
                    return (
                        <div key={el.id}
                             className={r.reviewCard}
                        >
                            <h1>{el.name}</h1>
                            <p>{el.price} руб.</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>Total: {sum} руб.</p>
            </div>
            <div className={r.reviewButtons}>
                <button className={s.cancelButton} onClick={() => {}}>Cancel</button>
                <button className={s.payButton} onClick={() => {}}>Payment</button>
            </div>
        </div>
    );
};

