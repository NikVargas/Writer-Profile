import {  useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import TextHelper from "./TextDoc";
import Header from "./Header"
import styled from "styled-components";
import AddGroup from "./AddGroup";
import Groups from "./Groups";
import AddText from "./AddText";
import Texts from "./Texts";

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
        <h2>My groups</h2>
        <Groups/>
        <h2>Homeworks</h2>
        <Texts/>

      </Wrapper>
    </>
  );
};


const Wrapper = styled.div`
margin-block-start: 180px;
width: 90vw;
height: 98vh;
`;



export default TeacherAccount;