import { useState } from "react";

const AddStudent = () =>{

const [firstName, setFirstName]= useState();
const [lastName, setLastName]= useState();
const [email, setEmail]= useState();

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-student", {
        body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email
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