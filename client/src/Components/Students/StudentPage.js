import styled from "styled-components";
import Header from "../Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Texts from "../Texts/Texts";

const StudentPage = () => {
  let { studentId } = useParams();
  const [student, setStudent] = useState();

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
  fetch(`/texts/${studentId}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 200) {
        console.log(data);
      }
    });
}, [studentId]);


  return (
    <Wrapper>
    <Header />
      <h1>Student Page</h1>
      {student ? (
        <div>
          <h2>
            {student.firstName}<span> {student.lastName}</span>
          </h2>
          {/* TODO map results */}
          <h3>{student.results} results</h3>
          {/* TODO map texts */}
          <h3>texts</h3>
          <Texts/>
        </div>
      ) : (
        ""
      )}
      
    </Wrapper>
  );
};

const Wrapper = styled.section`

`



export default StudentPage;
