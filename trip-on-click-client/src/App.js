import './App.css';
import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/Register";
import Login from './components/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';



function App() {
  return (
  

    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
