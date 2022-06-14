import { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const AddGroup = () => {
  let teacherId = useParams().id;
  const [groupName, setGroupName] = useState();
  const [group, setGroup] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [myTeacherId, setMyTeacherId] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-group", {
      body: JSON.stringify({
        teacherId: teacherId,
        groupName: groupName,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setGroup(data.data);
          setMyTeacherId(data.data.teacherId);
          data.data._id && navigate(`/my-groups/${data.data._id}`);
          console.log(data);
        } else {
          setErrorMsg("Error");
        }
      });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          type="text"
          placeholder="Group name"></Input>

        <Button type="submit">submit</Button>
      </Form>
    </>
  );
};



const Form = styled.form`
  width: 300px;
  height: 100px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
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
export default AddGroup;
