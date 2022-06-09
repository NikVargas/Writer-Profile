import { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const AddStudent = () =>{
let navigate = useNavigate();
const groupId = useParams().id;
// const [teacherId, setTeacherId ]= useState();
const [firstName, setFirstName]= useState();
const [lastName, setLastName]= useState();
const [email, setEmail]= useState();
const teacherId = localStorage.getItem("teacherId")

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-student", {
        body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        groupId: groupId,
        teacherId: teacherId
        }),
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            
               
            console.log("addstudent test:", data); 
            
            
  
        });
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Student First Name</label>
            <input 
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"></input>
            <label>Student Last Name</label>
            <input 
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"></input>
            <label>Student Email</label>
            <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type="text"
            placeholder="Email"></input>
            <button>Submit</button>
        </form>
        </>
    )
}

export default AddStudent;