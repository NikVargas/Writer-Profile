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
        if (data.status === 200){
          navigate(`/teachers/${data.data._id}`)
          } else { if(data.status != 200){
            fetch(`/student/login?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
              if(data.status === 200){
               console.log(data)
              } 
            })
          }
          }
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
        <Div>
        <Link to={`/sign-in`}>
          <div>CREATE ACCOUNT</div>
        </Link></Div>
      </HeaderPage>
      <Section>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw; 
  position: fixed;
  left: 0;
  right: 0;
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

const Div =styled.div`
padding: 70px;
`

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
top: -120px;
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

export default LogIn;
