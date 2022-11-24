import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";


export default function Register() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);


    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/users/register",
            data: {
                email,
                username,
                password,
            },
        };


        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });

    }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>


                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>


                {/* username */}
                <Form.Group controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>



                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                {/* submit button */}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Register
                </Button>

                {/* display success message */}
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}

            </Form>
        </>
    )
}