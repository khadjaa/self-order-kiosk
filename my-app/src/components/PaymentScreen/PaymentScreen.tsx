import React, {useState} from 'react';
import styled from "styled-components";
import {shallowEqual, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {ProductsType} from "../../store/orderInfoReducer";
import {PopupWindow} from "./PopupWindow";

const PaymentPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
`;

const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const QRCodeImage = styled.img`
  width: 80%;
  height: 80%;
  margin-bottom: 20px;
`;

const PaymentAmount = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PaymentInstructions = styled.div`
  font-size: 18px;
  text-align: center;
`;

export const PaymentScreen = () => {

    const orderItems = useSelector<AppStoreType, ProductsType[]>(state => state.info.order.orderItems, shallowEqual)
    let sum = 0
    const totalPrice = orderItems.map(el => sum += el.price)

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };

    return (
        <PaymentPageWrapper>
            <PaymentBox>
                <QRCodeImage
                    src={'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC'}
                    alt="QR Code"/>
                <PaymentAmount>К оплате {totalPrice}р</PaymentAmount>
                <PaymentInstructions>Пожалуйста, наведите камеру на QR-код для совершения оплаты</PaymentInstructions>
            </PaymentBox>
            <button onClick={handleOpenPopup}>Открыть всплывающее окно</button>
            <PopupWindow isOpen={isOpen} onClose={handleClosePopup}>
                <p>НОМЕР ВАШЕГО ЗАКАЗА 2134</p>
                <p>СФОТОГРАЙФИРУЙТЕ ИЛИ ЗАПОМНИТЕ НОМЕР ЗАКАЗА</p>
            </PopupWindow>
        </PaymentPageWrapper>
    );
};