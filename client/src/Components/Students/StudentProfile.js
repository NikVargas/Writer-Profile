import styled from "styled-components";
import Header from "../Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";



//only the current student's information...
//// it will be upgrade... display results, and  add badge system 
//in progress
const StudentProfile = () => {
  let { studentId } = useParams();
  const [student, setStudent] = useState();
  const [studentTexts, setStudentTexts] = useState();
  const [teacherId, setTeacherId] = useState();



useEffect(() => {
fetch(`/students/${studentId}`)
    .then((res) => res.json())
    .then((data) => {
    if (data.status === 200) {
        console.log(data.data);
        setStudent(data.data);
        setTeacherId(data.data.teacher);
        localStorage.setItem("student", `${studentId}`);
    }
    });
}, [studentId]);


useEffect(() => {
fetch(`/texts?teacherId=${teacherId}`)
    .then((res) => res.json())
    .then((data) => {
    if (data.status === 200) {
        setStudentTexts(data.data);
    }
    });
}, [teacherId]);

return (
<Wrapper>
    <Header />
    <div>
    {student ? (
        <H1>
        {" "}
        {student.firstName}
        <span> {student.lastName}</span>
        </H1>
    ) : (
        ""
    )}
    <H2> Results</H2>
    <H2>Texts</H2>
    {studentTexts
        ? studentTexts.map((text) => {
            return (
            <>
                <Link to={`texts/${text._id}`}>
                <Div>{text.title}</Div>
                </Link>
            </>
            );
        })
        : ""}
    </div>
</Wrapper>
);
};

export default StudentProfile;

const Wrapper = styled.section``;

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

const Div = styled.div`
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