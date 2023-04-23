import React, {useState} from 'react';
import s from './OrderScreen.module.css'
import img from '../../images/french-fries.svg'

export const OrderScreen = () => {

    const [categoryDish, setCategoryDish] = useState('all')
    const [filter, setFilter] = useState('all')

    const categories = [
        {id: 1, name: 'Бургеры', image: img},
        {id: 2, name: 'Пиццы', image: img},
        {id: 3, name: 'Салаты', image: img},
        {id: 4, name: 'Супы', image: img},
    ];

    const dishes = [
        {
            id: 1,
            categoryName: 'Бургеры',
            name: 'Бургер',
            description: 'Сочный бургер с говяжьей котлетой, луком, помидорами и салатом',
            price: 250,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            categoryName: 'Пиццы',
            name: 'Пицца',
            description: 'Аппетитная пицца с ароматным томатным соусом, сыром и разнообразными топпингами',
            price: 350,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            categoryName: 'Салаты',
            name: 'Салат',
            description: 'Свежий салат с миксом листьев, овощами, сыром и заправкой на выбор',
            price: 150,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Суп',
            categoryName: 'Супы',
            description: 'Ароматный суп с куриной грудкой, овощами и крупой на выбор',
            price: 200,
            image: 'https://via.placeholder.com/150',
        },
    ];

    let filteredArray = dishes

    if (filter === 'Бургеры') {
        filteredArray = dishes.filter(el => el.categoryName === 'Бургеры')
    }
    if (filter === 'Пиццы') {
        filteredArray = dishes.filter(el => el.categoryName === 'Пиццы')
    }
    if (filter === 'Салаты') {
        filteredArray = dishes.filter(el => el.categoryName === 'Салаты')
    }
    if (filter === 'Супы') {
        filteredArray = dishes.filter(el => el.categoryName === 'Супы')
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
                            <img src={category.image} alt="image"/>
                        </div>
                    )
                })}
            </div>
            <div className={s.menuDish}>
                {filteredArray.map((dish) => (
                    <div key={dish.id} className={s.card}>
                        <img src={dish.image} alt={dish.name}/>
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <p>{dish.price} руб.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
