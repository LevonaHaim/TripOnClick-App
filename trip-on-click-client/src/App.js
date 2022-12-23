import './App.css';
import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/Register";
import Login from './components/Login';
import Secret from './components/Secret';
import HomePage from './components/HomePage';
import "./index.css";

import { BrowserRouter, Route,Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Secret />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
