import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    <>
      {students
        ? students.map((student) => {
            return (
              <>
                <Link to={`/students/${student._id}`}>
                  <p>
                    {student.firstName}
                    <span>{student.lastName}</span>
                  </p>
                </Link>
              </>
            );
          })
        : "error"}
    </>
  );
};

export default Students;
