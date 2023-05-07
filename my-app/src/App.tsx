import React, {useEffect, useState} from 'react';
import './App.css';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import {Route, Routes} from "react-router-dom";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import {OrderScreen} from "./components/OrderScreen/OrderScreen";
import {Product} from "./components/Product/Product";
import {ReviewScreen} from "./components/ReviewScreen/ReviewScreen";
import {PaymentScreen} from "./components/PaymentScreen/PaymentScreen";
import {OrderList} from "./components/OrderList/OrderList";
import axios from "axios";

function App() {

    const [appState, setAppState] = useState();

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:6100/habr01.json';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);

    // console.log(appState)

  return (
      <div className={'App'}>
          <Routes>
              <Route path={'/'} element={<HomeScreen/>}></Route>
              <Route path={'/choose'} element={<ChooseScreen/>}></Route>
              <Route path={'/order'} element={<OrderScreen/>}></Route>
              <Route path={'/product'} element={<Product/>}/>
              <Route path={'/review'} element={<ReviewScreen/>}/>
              <Route path={'/payment'} element={<PaymentScreen/>}></Route>
              <Route path={'/cook'} element={<OrderList/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
