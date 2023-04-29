import React, {useState} from 'react';
import s from './OrderScreen.module.css'
import {useNavigate} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {cancelOrderAC, CategoryType, chooseProductAC, ProductsType} from "../../store/orderInfoReducer";

export const OrderScreen = () => {
    const categories = useSelector<AppStoreType, CategoryType[]>(state => state.info.order.categories)
    const products = useSelector<AppStoreType, ProductsType[]>(state => state.info.order.products)
    const orderType = useSelector((state: AppStoreType) => state.info.order.orderType)
    const orderItems = useSelector<AppStoreType, ProductsType[]>(state => state.info.order.orderItems, shallowEqual)

    const dispatch = useDispatch()

    const [categoryDish, setCategoryDish] = useState('all')
    const [filter, setFilter] = useState('all')

    const navigate = useNavigate()

    const cancelOrderHandler = () => {
        dispatch(cancelOrderAC())
        navigate('/')
    }

    const paymentHandler = () => {
        navigate('/review')
    }

    let filteredArray = products

    if (filter === 'Реал-Кебаб') {
        filteredArray = products.filter(el => el.categoryName === 'Реал-Кебаб')
    }
    if (filter === 'Гранд-Кебаб') {
        filteredArray = products.filter(el => el.categoryName === 'Гранд-Кебаб')
    }
    if (filter === 'Закуски') {
        filteredArray = products.filter(el => el.categoryName === 'Закуски')
    }
    if (filter === 'Супы') {
        filteredArray = products.filter(el => el.categoryName === 'Супы')
    }

    let sum = 0

    return (
        <div className={s.menu}>
            <div className={s.categories}>
                {categories.map(category => {

                    const changeFilterHandler = () => {
                        setCategoryDish(category.name)
                        setFilter(category.name)
                    }

                    return (
                        <div key={category.id}
                             style={{
                                 backgroundColor: category.name === categoryDish
                                     ? 'red' : 'transparent'
                             }}
                             onClick={changeFilterHandler}
                        >
                            <img src={category.image} alt="ima"/>
                        </div>
                    )
                })}
            </div>
            <div className={s.menuDish}>
                {filteredArray.map((dish) => (
                    <div key={dish.id}
                         className={s.card}
                         onClick={() => dispatch(chooseProductAC(dish.id))}
                    >
                        <img src={dish.image} alt={dish.name}/>
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <p>{dish.price} руб.</p>
                        <button onClick={() => navigate('/product')}>Go to product</button>
                    </div>
                ))}
            </div>
            <div className={s.orderInfo}>
                <h2>ЗАКАЗ {orderType}</h2>
                <p><strong>БЛЮДА:</strong></p>
                {orderItems !== null
                    ? orderItems.map(el => {
                        sum += el.price
                        return (
                            <li>{el.name}: {el.price}р</li>
                        )
                    })
                    : null
                }
                <p><strong>К ОПЛАТЕ: </strong>{sum}р</p>
                <div className={s.orderButtons}>
                    <button className={s.cancelButton} onClick={cancelOrderHandler}>ОТМЕНИТЬ</button>
                    <button className={s.payButton} onClick={paymentHandler}>ПЕРЕЙТИ К ЗАКАЗУ</button>
                </div>
            </div>
        </div>
    );
};

