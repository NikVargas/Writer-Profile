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
          {teacher ? <H1>Hi! {teacher.firstName} </H1> : <p>Hi!</p>}
        <div><H2>My groups</H2>
        <Groups/></div>
        <Div><H2>My texts</H2>
        <Texts/></Div>
      </Wrapper>
    </>
  );
};


const Wrapper = styled.section`
display: flex;
flex-direction: column;
`;

const H1 = styled.h1`
margin-bottom: 30px;
font-size: 40px;
`;

const Div = styled.div`
margin-top: 30px;

`;

const H2 = styled.h2`
margin-bottom: 30px;
font-size: 30px;
`;

export default TeacherAccount;