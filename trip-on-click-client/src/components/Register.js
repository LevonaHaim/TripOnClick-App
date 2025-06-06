
import styled from "styled-components";
import Button from "./login/Button";
import Icon from "./login/Icon";
import Input from "./login/Input";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../css/Login.css";

export default function Register() {
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { data } = await axios.post(
                "http://localhost:8080/users/register",
                {
                    email,
                    username,
                    password,
                },
                { withCredentials: true }
            );
            if (data) {
                if (data.errors) {
                    const { email, password } = data.errors;
                    if (email) generateError(email);
                    if (password) generateError(password);
                } else {
                    navigate("/login");
                }

            }

        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="logandreg">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <MainContainer >
                    <WelcomeText>הרשמה</WelcomeText>
                    <InputContainer>
                        <Input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="שם משתמש"
                        />
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="אימייל" />
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="סיסמא" />
                    </InputContainer>
                    <ButtonContainer>
                        <Button content="הירשם" type="submit"
                            onClick={(e) => handleSubmit(e)} />
                    </ButtonContainer>

                    <LoginWith>...או הירשם עם</LoginWith>
                    <HorizontalRule />
                    <IconsContainer>
                        <Icon color={FacebookBackground}>
                            <FaFacebookF />
                        </Icon>
                        <Icon color={InstagramBackground}>
                            <FaInstagram />
                        </Icon>
                        <Icon color={TwitterBackground}>
                            <FaTwitter />
                        </Icon>
                    </IconsContainer>
                    <HaveAccount onClick={ ()=>navigate("/login")}>יש לך חשבון?</HaveAccount>
                </MainContainer>
            </Form>
            <ToastContainer rtl={true}/>

        </div>
    );
}

const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;
@media only screen and (max-width: 320px) {
width: 80vw;
height: 90vh;
hr {
margin-bottom: 0.3rem;
}
h4 {
font-size: small;
}
}
@media only screen and (min-width: 360px) {
width: 80vw;
height: 90vh;
h4 {
font-size: small;
}
}
@media only screen and (min-width: 411px) {
width: 80vw;
height: 90vh;
}
@media only screen and (min-width: 768px) {
width: 80vw;
height: 80vh;
}
@media only screen and (min-width: 1024px) {
width: 70vw;
height: 50vh;
}
@media only screen and (min-width: 1280px) {
width: 30vw;
height: 80vh;
}
`;
const WelcomeText = styled.h2`
margin: 3rem 0 3rem 0;
`;
const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;
`;
const ButtonContainer = styled.div`
margin: 3rem 0 1rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
const LoginWith = styled.h5`
cursor: pointer;
`;
const HorizontalRule = styled.hr`
width: 90%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
background-color: #ebd0d0;
margin: 1.5rem 0 1rem 0;
backdrop-filter: blur(25px);
`;
const IconsContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 1rem 0 2rem 0;
width: 80%;
`;
const HaveAccount = styled.h4`
cursor: pointer;
direction:rtl;
`;
