import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useEffect } from "react";


const Groups = () =>{

   const teacher = localStorage.getItem("teacherId")
   const [ groups, setGroups]= useState();
//    console.log(teacher)
    //get teacher's groups
    useEffect(() => {
     
        fetch(`/groups?teacherId=${teacher}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("groups by teacher", data)
            // setGroups(data.data)
           // console.log(data)
          });
      }, []);





    return(
        <>
        {/* All my groups
        {groups ? groups.map((group)=>{
            return(
                <div></div>
            )
})
} */}
        </>
    )
}

export default Groups;