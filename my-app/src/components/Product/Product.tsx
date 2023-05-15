import React, {useState} from "react";
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

    const [count, setCount] = useState(0);
    const [dop, setDop] = useState([
        {id: 1, name: 'Кебаб бараний', price: 99},
        {id: 2, name: 'Сырный соус', price: 30},
        {id: 3, name: 'Баварский соус', price: 30},
    ])

    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);

    return (
        <div className={s.productCard}>
            <div className={s.productImage}>
                <img src={product.image} alt={product.name}/>
            </div>
            <div className={s.productDetails}>
                <h2>{product.name.toUpperCase()}</h2>
             <div className={s.kolvo}>
                 <div className={s.counter}>
                     <button className={s.buttonCount} onClick={decrementCount}>-</button>
                     <input type="text" value={1} readOnly className={s.inputCount}/>
                     <button className={s.buttonCount} onClick={incrementCount}>+</button>
                 </div>
             </div>
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
            <div className={s.productDetails}>
                <p>Дополнительные ингридиенты:</p>
                {
                    dop.map(el => {
                        return (
                            <li key={el.id} className={s.prodDop}>
                                <span className={s.h66}>{el.name} </span>
                                <div className={s.counter}>
                                    <button className={s.buttonCount} onClick={decrementCount}>-</button>
                                    <input type="text" value={count} readOnly className={s.inputCount}/>
                                    <button className={s.buttonCount} onClick={incrementCount}>+</button>
                                </div>
                                <span>{el.price} р</span>
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


