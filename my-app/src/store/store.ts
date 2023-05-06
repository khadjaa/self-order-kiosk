import {combineReducers, legacy_createStore} from 'redux';
import {orderInfoReducer} from "../reducers/orderInfoReducer";

// Объединяем редьюсеры в один корневой редьюсер
const rootReducer = combineReducers({
    info: orderInfoReducer
});

// Создаем store с корневым редьюсером
export const store = legacy_createStore(rootReducer);

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
