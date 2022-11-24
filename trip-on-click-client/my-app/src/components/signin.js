import React, { useState } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Signin() {

  
  const getUsers = () => {
    axios
    .get("http://localhost:8080/users/")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };
    getUsers();


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

return(
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
    <input type="text" onChange={e => setUserName(e.target.value)}/>
    
      <label>Username</label>
    </div>
    <div class="user-box">
    <input type="password" onChange={e => setPassword(e.target.value)}/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
);
}