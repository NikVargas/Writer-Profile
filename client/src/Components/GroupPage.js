import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AddStudent from "./AddStudent";



const GroupPage = () =>{

    const [student, setStudent] = useState();
    const [addStudentForm, setAddStudentForm] = useState(false);
    let groupId = useParams().id;
  
    const addStudentsForm = () => {
      setAddStudentForm(!addStudentForm);
    };

    return(
        <div>I,M the group page
            <Header/>
            <Container>
                <div>Group Name</div>
                <button onClick={addStudentsForm}>Add Student</button>
                {addStudentForm && <AddStudent/>}
            </Container>
        </div>
    )
}

const Container = styled.div`
margin-top: 120px;


`



export default GroupPage;