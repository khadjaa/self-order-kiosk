import React from "react";
import s from './Product.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {addProductAC, CompoundType} from "../../store/orderInfoReducer";

export const Product = () => {

    const product = useSelector((state: AppStoreType) => state.info.order.product)
    const compound = useSelector<AppStoreType, CompoundType[]>(state => state.info.order.compound)

    const dispatch = useDispatch()

    const addProductHandler = () => {
        dispatch(addProductAC(product.id - 1))
        navigate('/order')
    }

    const navigate = useNavigate()

    return (
        <div className={s.productCard}>
            <div className={s.productImage}>
                <img src={product.image} alt={product.name}/>
            </div>
            <div className={s.productDetails}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Состав</p>
                {
                    compound.map(el => {
                        return (
                            <li>
                                <span>{el.name}</span>
                                <input type="checkbox" checked={el.isDone}/>
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

