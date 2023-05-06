import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import s from './OrderList.module.css'

export const OrderList = () => {

    const orderList = useSelector<AppStoreType, any>(state => state.info.order.orderList)
    console.log(orderList)
    const dispatch = useDispatch()

    return (
        <ul>
            {orderList.map((subArray: any, index: any) => (
                <li key={index}>
                    {subArray.map((item: any) => (
                        <div key={item.id} className={s.borderLi}>
                            <p>#2134</p>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </li>
            ))}
        </ul>
    );
};

