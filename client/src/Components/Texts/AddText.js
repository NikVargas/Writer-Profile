import { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { FcApproval } from "react-icons/fc";


const AddText = () => {
  let navigate = useNavigate();
  let { teacherId } = useParams();
  const [title, setTitle] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [ confirmationMssg, setConfirmationMssg] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-text", {
      body: JSON.stringify({
        teacherId: teacherId,
        title: title,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setConfirmationMssg(true)
          data.data._id && navigate(`/texts/${data.data._id}`)
        } else {
          setErrorMsg("Error");
        }
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="New text"></Input>
        <Button>Submit</Button>
        { confirmationMssg === true ? 
          <FcApproval size={50}/>  : errorMsg}
      </Form> 
    </>
  );
};

export default AddText;


const Form = styled.form`
  width: 300px;
  height: 100px;
  margin: 10px;
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
margin-top: 15px;
height: 48px;
width: 180px;
border-radius: 30px;
border: 1px solid #dbdbdb;
box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.05);
text-align: center;
`;


const Button = styled.button`
border-radius: 2000px;
width: fit-content;
padding: 5px;
align-self: center;
color: midnightblue;
`;