import {  useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import Header from "../Header/Header"
import styled from "styled-components";
import AddGroup from "../Groups/AddGroup"
import Groups from "../Groups/Groups";
import AddText from "../Texts/AddText";
import Texts from "../Texts/Texts";

const TeacherAccount = () => {
 
  const [teacher, setTeacher] = useState();
  let {teacherId} = useParams();


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
          {teacher ? <h1>Hi! {teacher.firstName} </h1> : <p>Hi!</p>}
        <div><h2>My groups</h2>
        <Groups/></div>
        <div><h2>Homeworks</h2>
        <Texts/></div>
      </Wrapper>
    </>
  );
};


const Wrapper = styled.section`
display: flex;
flex-direction: column;
`;



export default TeacherAccount;