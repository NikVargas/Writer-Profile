import { useState, createContext } from "react";

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
