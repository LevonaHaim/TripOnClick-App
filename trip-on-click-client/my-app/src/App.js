import React from "react";
import SignInComp from "./components/signin";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";
import Register from "../../../trip-on-click-server/Register";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";

//import Getdatacomp from "./components/getdata";


function App(){ 


  return (
  <BrowserRouter>
  <Routes>
  <Route path='/Login' element={<Login />} />

    <Route path='/Register' element={<Register />} />
    <Route path='/Login' element={<Login />} />



  </Routes>
</BrowserRouter>
  )
}

export default App;
