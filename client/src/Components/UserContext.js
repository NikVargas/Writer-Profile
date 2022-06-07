import { useState, useEffect, createContext } from "react";


export const UserContext = createContext(null);

const UserProvider = ({children}) =>{
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [currentUser, setCurrentUser] = useState()
    const [logIn, setLogIn] = useState(false)

    useEffect(() => {
        fetch("/teachers")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data)
            setUsers(data);
        });
    }, []);

    useEffect(()=>{
        const user = window.sessionStorage.getItem("email") 
        console.log(typeof user)
        if (user){
            setCurrentUser(JSON.parse(user))
            setLogIn(true)
        }
    }, []);


    return(
        <UserContext.Provider
        value={{
            users,
            setUsers,
            status,
            setStatus,
            errorMessage,
            setErrorMessage,
            currentUser,
            setCurrentUser,
            logIn,
            setLogIn,
        }}
        >
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;