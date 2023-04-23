import React, { useState } from "react";
import s from './Product.module.css'


export const Product = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const product = {
        id: 1,
        categoryName: 'Бургеры',
        name: 'Бургер',
        description: 'Сочный бургер с говяжьей котлетой, луком, помидорами и салатом',
        price: 250,
        image: 'https://via.placeholder.com/150',
    }

    return (
        <div className={s.productCard} onClick={() => setIsExpanded(!isExpanded)}>
            <div className={s.productImage}>
                <img src={product.image} alt={product.name} />
            </div>
            {isExpanded && (
                <div className={s.productDetails}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className={s.productButtons}>
                        <button onClick={() => console.log("Added to order")}>
                            Add to Order
                        </button>
                        <button onClick={() => setIsExpanded(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

