import { useState, createContext } from "react";

//in the future, this context will be more usefull and render passing data in a more easy way...

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [currentTeacher, setCurrentTeacher] = useState();
  const [logIn, setLogIn] = useState(false);



  return (
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
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
