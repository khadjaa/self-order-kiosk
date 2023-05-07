import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import s from './OrderList.module.css'
import {RemoveOrderListAC} from "../../reducers/orderInfoReducer";

export const OrderList = () => {

    const orderList = useSelector<AppStoreType, any>(state => state.info.order.orderList)
    const orderType = useSelector<AppStoreType, any>(state => state.info.order.orderType)
    console.log(orderList)
    const dispatch = useDispatch()

    //orderList[0][0].compound[0].isDone
    return (
        <ul>
            {orderList.map((subArray: any, index: any) => (
                <li key={index} className={s.borderLi}>
                    <p className={s.number}>#2134</p>
                    <p className={s.orderType}>ЗАКАЗ {orderType}</p>
                    {subArray.map((item: any) => (
                        <div key={item.id} className={s.borderProd}>
                            <p>{item.name}</p>
                            {
                                item.compound.map((el: any) => el.isDone === false
                                    ? <h6>Без: {el.name}</h6>
                                    : null)
                            }
                        </div>
                    ))}
                    <div className={s.cookButtons}>
                        <button className={s.readyButton} >ГОТОВ</button>
                        <button className={s.deliverButton} onClick={() => dispatch(RemoveOrderListAC(index))}>ОТДАН</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

