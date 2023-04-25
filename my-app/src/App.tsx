import React from 'react';
import './App.css';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import {Route, Routes} from "react-router-dom";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import {OrderScreen} from "./components/OrderScreen/OrderScreen";
import {Product} from "./components/Product/Product";
import {ReviewScreen} from "./components/ReviewScreen/ReviewScreen";

function App() {
  return (
      <div className={'App'}>
          <Routes>
              <Route path={'/'} element={<HomeScreen/>}></Route>
              <Route path={'/choose'} element={<ChooseScreen/>}></Route>
              <Route path={'/order'} element={<OrderScreen/>}></Route>
              <Route path={'/product'} element={<Product/>}/>
              <Route path={'/review'} element={<ReviewScreen/>}/>
          </Routes>
      </div>
  );
}

export default App;
