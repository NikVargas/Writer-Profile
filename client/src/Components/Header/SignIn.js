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
    <Wrapper>
      <Header />
     
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Input
        placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          required
        />
        <Input
          value={lastName}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          required
        />
        <Input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
        />
        <Input
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <div>{errorMsg}</div>
        <Button type="submit">Create account</Button>
      </Form>
    </Wrapper>
  );
};


const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
color: midnightblue;
text-align: center;
padding: 20px;
`

const Form = styled.form`
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
flex-direction: column;
top: 20px;
background: white;
padding: 3em;
height: fit-content;
border-radius: 20px;
border-left: 1px solid white;
border-top: 1px solid white;
backdrop-filter: blur(10px);
box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
text-align: center;
position: relative;
transition: all 0.2s ease-in-out;
`;



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

export default SignIn;
