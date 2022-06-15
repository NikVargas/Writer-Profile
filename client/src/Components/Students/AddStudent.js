import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FcApproval } from "react-icons/fc";


const AddStudent = () => {

  const groupId = useParams().id;
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [ confirmationMssg, setConfirmationMssg] = useState(false);
  const teacherId = localStorage.getItem("teacherId");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-student", {
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        groupId: groupId,
        teacherId: teacherId,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200){
          //display a confirmation on submit form 
          setConfirmationMssg(true)
        };
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>Student information</Label>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name" required/>
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name" required/>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email" required/>
        <Button>Submit</Button> 
        { confirmationMssg === true ? 
          <FcApproval size={50}/>  : ""}
      </Form>
    </Wrapper>
  );
};

export default AddStudent;

const Wrapper = styled.div`
width: 80vw;
`;

const Form = styled.form`
position: sticky;
  left: 5%;
  right: 0;
  padding: 3em;
  margin: 1rem;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 80%;
  margin: 10px;
  display: flex;
  gap: 20px;
`;

const Label = styled.label`
color: midnightblue;
font-size: 20px;
font-weight: bold;
`

const Input = styled.input`
width: 200px;
border-radius: 30px;
border: 1px solid #dbdbdb;
box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.05);
text-align: center;
`;

const Button = styled.button`
border-radius: 2000px;
width: 100px;
padding: 10px;
align-self: center;
color: midnightblue;
:hover{
  background-color: midnightblue;
  color: #fff;
}
`;