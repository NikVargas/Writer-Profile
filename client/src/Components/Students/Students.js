import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//display all the teacher's student on the teacher dashboard

const Students = () => {
  let navigate = useNavigate();
  const [students, setStudents] = useState();
  const groupId = localStorage.getItem("groupId");

  useEffect(() => {
    fetch(`/students?groupId=${groupId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("students by group", data);
        setStudents(data.data);
        // console.log(d)
      });
  }, [groupId]);

  //    console.log(teacher)
  //get teacher's groups

  return (
    <Wrapper>
      {students
        ? students.map((student) => {
            return (
              <>
                <Link to={`/students/${student._id}`}>
                  <Name>
                    {student.firstName } { student.lastName}
                  </Name>
                </Link>
              </>
            );
          })
        : "Loading"}
    </Wrapper>
  );
};



const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
`;



const Name = styled.div`
 display: flex;
  justify-content: space-evenly;
  padding: 1em;
  margin: 1rem;
  border-radius: 5px;
  background: #fff;
  width: 200px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  animation: slideIn 3s;
  :hover {
  transform: rotate(-5deg);
}
`;


export default Students;
