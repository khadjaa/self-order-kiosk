import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {cancelOrderAC, deleteProductAC, ProductsType} from "../../reducers/orderInfoReducer";
import s from "../OrderScreen/OrderScreen.module.css";
import r from './ReviewScreen.module.css'
import {useNavigate} from "react-router-dom";

export const ReviewScreen = () => {

    const orderItems = useSelector<AppStoreType, ProductsType[]>(state => state.info.order.orderItems, shallowEqual)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(orderItems)

    let sum = 0

    const cancelOrderHandler = () => {
        navigate('/order')
    }

    const paymentHandler = () => {
        navigate('/payment')
    }

    const deleteProductHandler = (id: number) => {
        dispatch(deleteProductAC(id))
    }

    return (
        <div className={r.review}>
            <p>ВАШ ЗАКАЗ</p>
            <div className={s.cardReview}>
                {orderItems.map(el => {
                    sum += el.price
                    return (
                        <div key={el.id}
                             className={r.reviewCard}
                        >
                            <h1>{el.name}</h1>
                            <p>{el.price} руб.</p>
                            <button
                                className={r.deleteButton}
                                onClick={() => deleteProductHandler(el.id)}>Удалить</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>К ОПЛАТЕ: {sum} руб.</p>
            </div>
            <div className={r.reviewButtons}>
                <button className={s.cancelButton} onClick={cancelOrderHandler}>НАЗАД</button>
                <button className={s.payButton} onClick={paymentHandler}>ОПЛАТИТЬ</button>
            </div>
        </div>
    );
};

