import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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
          <Title>Log In</Title>
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
  width: 90vw;
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

const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Form = styled.form`
  width: 50%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
padding: 20px;
`
export default LogIn;
