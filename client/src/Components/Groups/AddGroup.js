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
      <div>Form to Add a group </div>
      <Form onSubmit={handleSubmit}>
        <input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          type="text"
          placeholder="Group name"></input>

        <button type="submit">submit</button>
      </Form>
    </>
  );
};

const Form = styled.form`
  width: 400px;
  height: 50px;
  margin: 10px;
  border: 1px solid yellowgreen;
`;
export default AddGroup;
