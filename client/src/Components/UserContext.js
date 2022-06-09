import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";

export const UserContext = createContext(null);

const UserProvider = ({children}) =>{
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [currentTeacher, setCurrentTeacher] = useState()
    const [logIn, setLogIn] = useState(false)
    
    let teacherId = useParams().id;
        console.log(teacherId)
    useEffect(() => {
        fetch(`/teachers/${teacherId}`)
        .then((res) => res.json())
        .then((data) => {
            setCurrentTeacher(data);
            console.log(data);
        });
    }, []);
console.log(currentTeacher)
 
    return(
        <UserContext.Provider
        value={{
            users,
            setUsers,
            status,
            setStatus,
            errorMessage,
            setErrorMessage,
            currentTeacher,
            setCurrentTeacher,
            logIn,
            setLogIn,
        }}
        >
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;