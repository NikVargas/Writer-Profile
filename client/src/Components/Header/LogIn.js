import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Writer_Profile IMG/Logo.png";
import { useState } from "react";
import Books from "../Writer_Profile IMG/Books.png"

const LogIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/teacher/login?email=${email}&password=${password}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          navigate(`/teachers/${data.data._id}`);
          sessionStorage.setItem('user', 'Teacher')
        } else {
          if (data.status != 200) {
            fetch(`/student/login?email=${email}&password=${password}`)
              .then((res) => res.json())
              .then((data) => {
                if (data.status === 200) {
                  navigate(`/students/${data.data._id}`);
                  sessionStorage.setItem('user', 'Student')
                } else {
                  alert("Bad login")
                }
              });
          }
        } 
      });
  };


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
        <Book src={Books}/>
        <Form onSubmit={handleSubmit}>
          <Title>Log In</Title>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email@myemail.com"
            required/>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"/>
          <Button> LOG IN </Button>
          <P>Forgot your password?</P>
        </Form>
      </Section>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`

`;

const HeaderPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  height : fit-content;
  position: fixed;
  left: 0;
  right: 2em;
  margin-left: auto;
  margin-right: auto;
  top: 0%;
  z-index: 2;
  background-color: white;
`;

const Img = styled.img`
  width: 180px;
  padding: 30px;
`;

const Book = styled.img`
  width: 180px;
  position: relative;
  top: 16em;
  right: 10em;
  z-index: 2;
`;


const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

`;

const Form = styled.form`
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
flex-direction: column;
top: -180px;
background: white;
padding: 3em;
height: 320px;
border-radius: 20px;
border-left: 1px solid white;
border-top: 1px solid white;
backdrop-filter: blur(10px);
box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
text-align: center;
position: relative;
transition: all 0.2s ease-in-out;

`;

const Title = styled.h1`
color: midnightblue;
text-align: center;
padding: 20px;
`

const Input = styled.input`
background: transparent;
width: 200px;
padding: 1em;
margin-bottom: 2em;
border: none;
border-left: 1px solid rgba(255,255,255,0.3);
border-top: 1px solid rgba(255,255,255,0.3);
backdrop-filter: blur(10px);
box-shadow: 4px 4px 60px rgba(0,0,0,0.12);
color: midnightblue;
font-weight: 500;
transition: all 0.2s ease-in-out;

:hover {
background: rgba(255,255,255,0.1);
box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.12);
}

:focus {
background: rgba(255,255,255,0.1);
box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.12);
}

:active {
      text-shadow: none;
    }
`

const Button = styled.button`
width: 120px;
font-size: 1rem;
padding: 5px;
background: rgba(255,255,255,0.15);
box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.15);
color: midnightblue;
  cursor: pointer;

  :hover {
background: midnightblue;
color: white;
box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.12);
}

:active {
  background: rgba(255,255,255,0.2);
}
`
const P =styled.p`
font-size: 10px;
padding: 4px;
`

export default LogIn;
