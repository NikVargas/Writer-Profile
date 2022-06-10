import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import TeacherAccount from "./TeacherAccount";
import Footer from "./Footer";
import Logo from "./Logo.png";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/teacher/login?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("logIn", data);
        navigate(`/teachers/${data.data._id}`);
      });
  };
  return (
    <Wrapper>
      <HeaderPage>
        <Link to={`/`}>
          <Img src={Logo} />
        </Link>
        <Link to={`/sign-in`}>
          <div>CREATE ACCOUNT</div>
        </Link>
      </HeaderPage>
      <Section>
        <Form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <label>E mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email@myemail.com"
            required></input>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"></input>
          <button> LOG IN </button>
          <p>Forgot your password?</p>
        </Form>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 90%;
`;

const HeaderPage = styled.div`
  top: 0;
  position: sticky;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const Img = styled.img`
  width: 150px;
`;

const Section = styled.section`
  width: 90vw;
  height: 98vh;
  margin-block-start: 100px;
`;

const Form = styled.form`
width: 50%;
height: 50%;
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
border: 1px midnightblue solid

`;

export default LogIn;
