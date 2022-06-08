import TextHelper from "./TextHelper";
import Header from "./Header"
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

const TeacherAccount = () =>{

    const handleAddGroup = (e) => {
        e.preventDefault();
        fetch("/add-group", {
        body: JSON.stringify({
            groupName: groupName,
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 200){
                navigate("/groups/:id");
            } else {
                setErrorMsg("Create account unsuccessful, please contact us.")
            }
        });
    };






    return(
        <>
        <Header/>
        <Wrapper>
        <div>Avatar</div> Hi! Teacher's name
        <h1>My groups</h1>
        {/* need enpoint and handler to create, update and delete groups DB */}
        <button>Add group </button>
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