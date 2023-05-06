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
                <li key={index} className={s.borderLi}>
                    <p>#2134</p>
                    {subArray.map((item: any) => (
                        <div key={item.id} >
                            <p>{item.name}</p>
                        </div>
                    ))}
                    <button onClick={() => alert(index)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
};

