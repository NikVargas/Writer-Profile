import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";

const SignIn = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/add-teacher", {
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Sign In:", data);
        });
    };

    return (
        <>
        <Header />
        <h1>Create an account</h1>
        <Form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
            />
            <label>Last name</label>
            <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
            />
            <label>Email address</label>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
            />
            <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            />

            <button type="submit">Create account</button>
        </Form>
        <Footer />
        </>
    );
};

const Form = styled.form`
display: flex;
flex-direction: column;
margin-block-start: 130px;
`;

export default SignIn;
