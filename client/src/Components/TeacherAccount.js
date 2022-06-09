import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextHelper from "./TextHelper";
import Header from "./Header"
import styled from "styled-components";
import AddGroup from "./AddGroup";

const TeacherAccount = () =>{
    
    const navigate = useNavigate();
    // const [teacherId, setTeacherId] = useState();
    const [teacher, setTeacher] = useState();
    const [addGroupForm, setAddGroupForm] = useState(false);
    let teacherId = useParams().id;


    const addGroupsForm = ()=>{
        setAddGroupForm(!addGroupForm)
    }
    
useEffect(() => {
    console.log(teacherId)
    fetch(`/teachers/${teacherId}`)
        .then((res) => res.json())
        .then((data) => {
        setTeacher(data.data)
        // console.log(data)
        });
}, [teacherId]);


//     useEffect(() => {
//     setTeacherId(JSON.parse(localStorage.getItem("id")));
// }, []);
    // const handleAddGroup = (e) => {
    //     e.preventDefault();
    //     fetch("/add-group", {
    //     body: JSON.stringify({
    //         groupName: groupName,
    //     }),
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (data.status === 200){
    //             navigate("/groups/:id");
    //         } else {
    //             setErrorMsg("Create account unsuccessful, please contact us.")
    //         }
    //     });
    // };
   
    return(
        <>
        
        <Header/>
        <Wrapper>
         <div>Avatar</div>
         {teacher ? <div>Hi! {teacher.firstName} </div> : <p>Hi!</p>}  
        <h1>My groups</h1>
        {/* need enpoint and handler to create, update and delete groups DB */}
        <button onClick={addGroupsForm}>Add group </button>
        {addGroupForm && (
           <AddGroup/ >
        )}
        
        <p>Group 1</p>
        <p>Group 2</p>
        <p>Group 3</p>
        <h1>Homeworks</h1>
        {/* need enpoint and handler to create, update and delete groups DB */}
        <button>Add homework</button>
        <p>Text 1 </p>
        <p>Text 2 </p>
        <p>Text 3 </p>
        <TextHelper/>
        </Wrapper>
        </>
    )
};


const Wrapper = styled.div`
margin-block-start: 180px;

`;



export default TeacherAccount;