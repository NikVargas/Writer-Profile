import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AddStudent from "./AddStudent";
import { useEffect } from "react";
import Students from "./Students";



const GroupPage = () =>{

    let {groupId} = useParams();
    const [student, setStudent] = useState();
    const [addStudentForm, setAddStudentForm] = useState(false);
    const addStudentsForm = () => {
      setAddStudentForm(!addStudentForm);
    };
    const [ group, setGroup] = useState();
    const [ students, setStudents] = useState();

    // console.log("current group id",groupId)
    useEffect(() => {
        fetch(`/groups/${groupId}`)
          .then((res) => res.json())
          .then((data) => {
              if (data.status === 200){
                setGroup(data.data);
                setStudents(data.data.students)
                localStorage.setItem("groupId", `${groupId}`)
              }
          });
      }, [groupId]);




    return(
        <div>I,M the group page
            <Header/>
            <Container>
                <> { group ? 
                 <div>{group.groupName}</div> : ""}
                 </>
                <button onClick={addStudentsForm}>Add Student</button>
                {addStudentForm && <AddStudent/>}
                <div>Display group's students</div>
                <Students/>
            </Container>
        </div>
    )
}

const Container = styled.div`
margin-top: 120px;


`



export default GroupPage;