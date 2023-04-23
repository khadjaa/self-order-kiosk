import React, {useState} from 'react';
import s from './OrderScreen.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {CategoryType, chooseProductAC, ProductsType} from "../../store/orderInfoReducer";

export const OrderScreen = () => {
//  let tasks = useSelector<AppRootStateType, Array<TaskType>>((state => state.tasks[id]))
    const categories = useSelector<AppStoreType, CategoryType[]>(state => state.info.order.categories)
    const products = useSelector<AppStoreType, ProductsType[]>(state => state.info.order.products)
    const orderType = useSelector((state: AppStoreType) => state.info.order.orderType)

    const dispatch = useDispatch()

    const [categoryDish, setCategoryDish] = useState('all')
    const [filter, setFilter] = useState('all')

    const navigate = useNavigate()

    let filteredArray = products

    if (filter === 'Бургеры') {
        filteredArray = products.filter(el => el.categoryName === 'Бургеры')
    }
    if (filter === 'Пиццы') {
        filteredArray = products.filter(el => el.categoryName === 'Пиццы')
    }
    if (filter === 'Салаты') {
        filteredArray = products.filter(el => el.categoryName === 'Салаты')
    }
    if (filter === 'Супы') {
        filteredArray = products.filter(el => el.categoryName === 'Супы')
    }

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
                <h2>Order {orderType}</h2>
                <p><strong>Date:</strong> April 23, 2023</p>
                <p><strong>Time:</strong> 12:30 PM</p>
                <p><strong>Items:</strong></p>
                <ul>
                    <li>Chicken Sandwich</li>
                    <li>Fries</li>
                    <li>Coke</li>
                </ul>
                <p><strong>Total:</strong> $10.50</p>
                <div className={s.orderButtons}>
                    <button className={s.cancelButton}>Cancel Order</button>
                    <button className={s.payButton}>Go to Payment</button>
                </div>
            </div>
        </div>
    );
};

