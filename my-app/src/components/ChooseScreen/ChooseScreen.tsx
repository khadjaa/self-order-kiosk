import React from 'react';
import {useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";

const ChooseScreen = () => {

    const orderType = useSelector((state:AppStoreType) => state.info.order)

    return (
        <div>
            {orderType.orderType}
        </div>
    );
};

export default ChooseScreen;