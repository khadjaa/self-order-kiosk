import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import ok from '../../images/Ok.png'
import no from '../../images/No.png'
import React from "react";
import s from './PopupWindow.module.css'

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    }, 10000)

    return (
        <>
            {isOpen && (
                <Popup>
                    {
                        paymentStatus
                            ? <PopupContent>
                                <img src={ok} alt="ok"/>
                                <p className={s.orderNumber}>2134</p>
                                <p>СФОТОГРАФИРУЙТЕ ИЛИ ЗАПОМНИТЕ НОМЕР ЗАКАЗА</p>
                                <button
                                    onClick={() => navigate('/choose')}
                                    className={s.buttonOrder}>
                                    Нажмите чтобы заказать
                                </button>
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

//<div class="attention-18">
//             <div id="info"><b>Продажа алкогольной продукции <br>
//                 только для лиц старше 18 лет.</b> <br><br>
//                 Чтобы продолжить, подтвердите, <br>
//                 что вам уже исполнилось 18 лет.
//             </div>
//             <div class="btn18">
//                 <div id="ans-yes"><span>Мне больше 18 лет</span></div>
//                 <div id="ans-no"><span>Мне еще нет 18 лет</span></div>
//             </div>
//         </div>