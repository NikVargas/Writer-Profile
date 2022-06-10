import {  useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import TextHelper from "./TextHelper";
import Header from "./Header"
import styled from "styled-components";
import AddGroup from "./AddGroup";
import GroupPage from "./GroupPage";
import Groups from "./Groups";

const TeacherAccount = () => {
  // const navigate = useNavigate();
  // const [teacherId, setTeacherId] = useState();
  const [teacher, setTeacher] = useState();
  const [addGroupForm, setAddGroupForm] = useState(false);
  let {teacherId} = useParams();

  const addGroupsForm = () => {
    setAddGroupForm(!addGroupForm);
  };


  //get teacher information
  useEffect(() => {
    console.log(teacherId);
    fetch(`/teachers/${teacherId}`)
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data.data);
        localStorage.setItem("teacherId", `${teacherId}`)
        // console.log(data)
      });
  }, [teacherId]);


  //get teacher's groups

  return (
    <>
      <Header />
      <Wrapper>
        <div>Avatar</div>
        {teacher ? <div>Hi! {teacher.firstName} </div> : <p>Hi!</p>}
        <h1>My groups</h1>
        {/* need enpoint and handler to create, update and delete groups DB */}
        <button onClick={addGroupsForm}>Add group </button>
        {addGroupForm && <AddGroup />}
        <Groups/>
        <h1>Homeworks</h1>
        {/* need enpoint and handler to create, update and delete groups DB */}
        <button>Add homework</button>
        
        <TextHelper />
      </Wrapper>
    </>
  );
};


const Wrapper = styled.div`
margin-block-start: 180px;

`;



export default TeacherAccount;