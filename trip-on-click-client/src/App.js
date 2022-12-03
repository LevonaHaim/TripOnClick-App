import './App.css';
import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/Register";
import Login from './components/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';



function App() {
  return (
    // <Container>
    //   <Row>
    //     <Col xs={12} sm={12} md={6} lg={6}>
    //       {/* <Register /> */}
    //       <Login/>
    //     </Col>

    //     <Col xs={12} sm={12} md={6} lg={6}></Col>
    //   </Row>
    // </Container>

    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
