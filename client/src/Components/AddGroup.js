import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


const AddGroup = () =>{

    let teacherId = useParams().id;
    const [groupName, setGroupName]= useState();

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-group", {
        body: JSON.stringify({
        teacherId: teacherId,
        groupName: groupName
        }),
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        });
    };




    return(
        <>
        <div>Form to Add a group </div>
        <Form onSubmit={handleSubmit}>
            <input 
            value={groupName}
            onChange={(e)=> setGroupName(e.target.value)}
            type="text"
            placeholder="Group name"></input>
            <button type="submit">submit</button>
        </Form>
        </>
    )
}


const Form = styled.form`
width: 200px;
height: 300px;
`;
export default AddGroup;