import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import ok from '../../images/Ok.png'
import no from '../../images/No.png'
import React from "react";

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

type PopupWindowPropsType = {
    isOpen: boolean
    onClose: () => void
    paymentStatus: boolean
    children: React.ReactNode
}

export const PopupWindow: React.FC<PopupWindowPropsType> = ({isOpen, onClose, paymentStatus, children}) => {

    const navigate = useNavigate()

    setTimeout(() => {
        onClose()
        // navigate('/')
    }, 5000)

    return (
        <>
            {isOpen && (
                <Popup>
                    {
                        paymentStatus
                            ? <PopupContent>
                                <img src={ok} alt="ok"/>
                                <p>НОМЕР ВАШЕГО ЗАКАЗА 2134</p>
                                <p>СФОТОГРАЙФИРУЙТЕ ИЛИ ЗАПОМНИТЕ НОМЕР ЗАКАЗА</p>
                            </PopupContent>
                            : <PopupContent>
                                <img src={no} alt="no"/>
                                <p>ОШИБКА ПРИ СОВЕРШЕНИИ ОПЛАТЫ</p>
                            </PopupContent>
                    }
                </Popup>
            )}
        </>
    );
};

