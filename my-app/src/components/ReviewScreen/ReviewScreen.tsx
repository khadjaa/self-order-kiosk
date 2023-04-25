import React from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {ProductsType} from "../../store/orderInfoReducer";
import s from "../OrderScreen/OrderScreen.module.css";

export const ReviewScreen = () => {

    const orderItems = useSelector<AppStoreType, ProductsType[]>(state => state.info.order.orderItems, shallowEqual)
    const orderType = useSelector((state: AppStoreType) => state.info.order.orderType)

    return (
        <div className={s.review}>
            <p>ВАШ ЗАКАЗ</p>
            <div>
                {orderItems.map(el => {
                    return (
                        <div>
                            {el.name}
                        </div>
                    )
                })}
            </div>
            <div className={s.orderButtons}>
                <button className={s.cancelButton} onClick={() => {}}>Cancel</button>
                <button className={s.payButton} onClick={() => {}}>Payment</button>
            </div>
        </div>
    );
};

