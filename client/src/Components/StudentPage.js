import styled from "styled-components";
import Header from "./Header";
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
      Student Page
      {student ? (
        <div>
          <p>
            {student.firstName}
            <spa>{student.lastName}</spa>
          </p>
          {/* TODO map results */}
          <div>{student.results} results</div>
          {/* TODO map texts */}
          <div>{student.texts}texts</div>
        </div>
      ) : (
        ""
      )}
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
margin-block-start: 140px;

`



export default StudentPage;
