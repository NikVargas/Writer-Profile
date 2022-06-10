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
        {teacher ? <div>Hi! {teacher.firstName} </div> : <p>Hi!</p>}
        <h1>My groups</h1>
        <Groups/>
        <h1>Homeworks</h1>
        <Texts/>

      </Wrapper>
    </>
  );
};


const Wrapper = styled.div`
margin-block-start: 180px;

`;



export default TeacherAccount;