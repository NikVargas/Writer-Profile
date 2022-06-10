import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [currentTeacherId, setCurrentTeacherId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

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
        console.log(data);
        if (data.status === 200) {
          setCurrentTeacherId(data.data._id);
          // localStorage.setItem("id", JSON.stringify(currentTeacherId));
          data.data._id && navigate(`/teachers/${data.data._id}`);
        } else {
          setErrorMsg("Create account unsuccessful, please contact us.");
        }
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
        <div>{errorMsg}</div>
        <button type="submit">Create account</button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-block-start: 130px;
`;

export default SignIn;
