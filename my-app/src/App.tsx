import React from 'react';
import './App.css';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import {Route, Routes} from "react-router-dom";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";

function App() {
  return (
   <Routes>
       <Route path={'/'} element={<HomeScreen/>}></Route>
       <Route path={'/choose'} element={<ChooseScreen/>}></Route>
   </Routes>
  );
}

export default App;
