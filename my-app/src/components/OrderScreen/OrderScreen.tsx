import React from 'react';
import s from './OrderScreen.module.css'

export const OrderScreen = () => {
    const dishes = [
        {
            id: 1,
            name: 'Бургер',
            description: 'Сочный бургер с говяжьей котлетой, луком, помидорами и салатом',
            price: 250,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Пицца',
            description: 'Аппетитная пицца с ароматным томатным соусом, сыром и разнообразными топпингами',
            price: 350,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Салат',
            description: 'Свежий салат с миксом листьев, овощами, сыром и заправкой на выбор',
            price: 150,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Суп',
            description: 'Ароматный суп с куриной грудкой, овощами и крупой на выбор',
            price: 200,
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className={s.menu}>
            {dishes.map((dish) => (
                <div key={dish.id} className={s.card}>
                    <img src={dish.image} alt={dish.name} />
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                    <p>{dish.price} руб.</p>
                </div>
            ))}
        </div>
    );
};

