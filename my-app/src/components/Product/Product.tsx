import React from "react";
import s from './Product.module.css'
import {useNavigate} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {addProductAC, changeCompoundAC, ProductsType} from "../../reducers/orderInfoReducer";

export const Product = () => {

    const product = useSelector<AppStoreType, ProductsType>(state => state.info.order.product, shallowEqual)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addProductHandler = () => {
        dispatch(addProductAC(product.id))
        navigate('/order')
    }

    return (
        <div className={s.productCard}>
            <div className={s.productImage}>
                <img src={product.image} alt={product.name}/>
            </div>
            <div className={s.productDetails}>
                <h3>{product.name}</h3>
                <p>Состав:</p>
                {
                    product.compound.map(el => {
                        return (
                            <li key={el.id} className={s.prod}>
                                <input
                                    type="radio"
                                    checked={el.isDone}
                                    className={s.checkBox}
                                    onClick={() => dispatch(changeCompoundAC(product.id, el.id, !el.isDone))}
                                />
                                <span>{el.name}</span>
                            </li>
                        )
                    })
                }
            </div>
            <div className={s.orderButtons}>
                <button
                    className={s.cancelButton}
                    onClick={() => navigate('/order')}
                >ОТМЕНИТЬ
                </button>
                <button
                    className={s.payButton}
                    onClick={addProductHandler}
                >ДОБАВИТЬ В ЗАКАЗ
                </button>
            </div>
        </div>
    );
}


