import React from "react";
import s from './Product.module.css'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";

export const Product = () => {

    const product = useSelector((state: AppStoreType)=> state.info.order.product)

    const navigate = useNavigate()

    return (
        <div className={s.productCard}>
            <div className={s.productImage}>
                <img src={product.image} alt={product.name}/>
            </div>
            <div className={s.productDetails}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className={s.orderButtons}>
                <button
                    className={s.cancelButton}
                    onClick={() => navigate('/order')}
                >ОТМЕНИТЬ
                </button>
                <button
                    className={s.payButton}
                >ДОБАВИТЬ В ЗАКАЗ
                </button>
            </div>
        </div>
    );
}

