import styled from "styled-components";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddStudent from "./AddStudent";
import Students from "./Students";

const GroupPage = () => {
  let { groupId } = useParams();
  const [addStudentForm, setAddStudentForm] = useState(false);

  const addStudentsForm = () => {
    setAddStudentForm(!addStudentForm);
  };
  const [group, setGroup] = useState();

  // console.log("current group id",groupId)
  useEffect(() => {
    fetch(`/groups/${groupId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setGroup(data.data);
          localStorage.setItem("groupId", `${groupId}`);
        }
      });
  }, [groupId]);

  return (
    <div>
      <Header />
      <Container>
        
        <> {group ? 
        <h2>{group.groupName}</h2> 
        : "Loading"}</>
        <Students />
        <button onClick={addStudentsForm}>Add Student</button>
        {addStudentForm && <AddStudent />}
        <div>Display group's students</div>
        
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin-top: 120px;
`;

export default GroupPage;
