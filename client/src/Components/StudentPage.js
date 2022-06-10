
import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";






const StudentPage = () =>{

    let {studentId} = useParams();
    const [student, setStudent] = useState();


console.log(studentId)
    useEffect(() => {
        fetch(`/students/${studentId}`)
          .then((res) => res.json())
          .then((data) => {
              if (data.status === 200){
                  console.log(data)
                setStudent(data.data);
                // localStorage.setItem("groupId", `${groupId}`)
              }
          });
      }, [studentId]);





    return(
        
        <>Student Page
        { student ?
        <div>
        <div>{student.firstName}<spa>{student.lastName}</spa></div> 
        {/* TODO map results */}
        <div>{student.results}</div>
        {/* TODO map texts */}
        <div>{student.texts}</div>
        </div>
        : ""}
        
        <Header/>
        </>
    )
}

export default StudentPage;