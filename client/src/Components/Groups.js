import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useEffect } from "react";
import styled from "styled-components";
import { Link,  } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Groups = () =>{
let navigate = useNavigate();
   const teacher = localStorage.getItem("teacherId")
   const [ groups, setGroups]= useState();
//    console.log(teacher)
    //get teacher's groups
    useEffect(() => {

        fetch(`/groups?teacherId=${teacher}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log("groups by teacher", data.data)
            setGroups(data.data)
           // console.log(d)
          });
      }, [teacher]);




    return(
        <>
           { groups ? groups.map((group)=>{
            return(
                <>
                <Div>{group.groupName}</Div>
                <Link to={`/groups/${group._id}`}>link</Link>
                </>
            )
        }) : "error"}    
        </>
    );
};


const Div = styled.div`
padding: 10px;

`;



export default Groups;