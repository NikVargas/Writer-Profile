import styled from "styled-components";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddStudent from "../Students/AddStudent";
import Students from "../Students/Students";
import { FcCheckmark } from "react-icons/fc"


const GroupPage = () => {
  let { groupId } = useParams();
  
  const [addStudentForm, setAddStudentForm] = useState(false);
  const [confirmationMssg, setConfirmationMssg] = useState();

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
          setConfirmationMssg("FcCheckmark")
        }
      });
  }, [groupId]);



  return (
    <>
      <Header />
      <Container>
        <> {group ? 
        <H2>{group.groupName}</H2> : ""}</>
        <H3>Students</H3>
        <Students />
        <Button onClick={addStudentsForm}>Add Student</Button>
        {addStudentForm && <AddStudent />}
      </Container>
    </>
  );
};



const Container = styled.section`
padding: 10px 10px 30px 100px;
`;


const H2 = styled.h2`
margin-bottom: 30px;
font-size: 30px;
color: midnightblue;
`;

const H3 = styled.h3`
margin-bottom: 10px;
font-size: 25px;
color: midnightblue;

`;

const Button = styled.button`
width: 130px;
border-radius: 2000px;
font-size: 1rem;
padding: 10px;
background: midnightblue;
margin-top: 10px;
margin-bottom: 10px;
box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.15);
color: white;
  cursor: pointer;
  :hover{
    background: white;
    color: midnightblue ;
  }
`;

export default GroupPage;
