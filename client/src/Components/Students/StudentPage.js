import styled from "styled-components";
import Header from "../Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const StudentPage = () => {
  let { studentId } = useParams();
  const [student, setStudent] = useState();

  console.log(studentId);
  useEffect(() => {
    fetch(`/students/${studentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          setStudent(data.data);
          // localStorage.setItem("groupId", `${groupId}`)
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
          <h3>{student.texts}texts</h3>
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
