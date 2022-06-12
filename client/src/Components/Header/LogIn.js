import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/Users/nikollevargas/Desktop/WD.Bootcamp/WD_Final-Project/client/src/Components/Logo.png";
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

  // const handleStudentSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(`/student/login?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("logIn", data);
  //       if (data.status === false){
  //         navigate(`/students/${data.data._id}`);
  //       }
  //     });
  // };




  return (
    <>
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
            type="password"
            placeholder="Password"></input>
          <button> LOG IN </button>
          <p>Forgot your password?</p>
        </Form>
      </Section>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
`;

const HeaderPage = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
`;
const Img = styled.img`
  width: 180px;
  padding: 30px;
  margin-top: 14%;
`;

const Section = styled.div`
margin-block-start: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`;

const Form = styled.form`
  width: 50%;
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
