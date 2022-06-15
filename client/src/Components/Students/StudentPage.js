import styled from "styled-components";
import Header from "../Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Texts from "../Texts/Texts";


const StudentPage = () => {
  let { studentId } = useParams();
  const [student, setStudent] = useState();
  const userStudent = sessionStorage.getItem('User:', 'StudentUser')

  //get specific student's information
  console.log(studentId);
  useEffect(() => {
    fetch(`/students/${studentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          setStudent(data.data);
          localStorage.setItem("studentId", `${studentId}`)
          // localStorage.setItem("groupId", `${groupId}`)
        }
      });
  }, [studentId]);

//get students texts
useEffect(() => {
  fetch(`/students/${studentId}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 200) {
        console.log(data);
      }
    });
}, [studentId]);

const [texts, setTexts] = useState();
const teacher = localStorage.getItem("teacherId");
const studentPage = useParams()


useEffect(() => {
  fetch(`/texts?studentId=${teacher}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("texts by teacher", data.data);
      setTexts(data.data);
      // console.log(d)
    });
}, [teacher]);


  return (
    <Wrapper>
    <Header />
      {student ? (
        <div>
          <H1>
            {student.firstName}<span> {student.lastName}</span>
          </H1>
          {/* TODO map results */}
          <H2>{student.results} Results</H2>
          {/* TODO map texts */}
          <H2>Texts</H2>
          <Texts/>
        </div>
      ) : (
        ''
      )}
      
    </Wrapper>
  );
};

const Wrapper = styled.section`

`;

const H1 = styled.h1`
margin-bottom: 30px;
font-size: 40px;
color: midnightblue;
`;

const H2 = styled.h2`
margin-bottom: 30px;
font-size: 30px;
color: midnightblue;
`;



export default StudentPage;
