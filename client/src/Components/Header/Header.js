import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Writer_Profile IMG/Logo.png";



const Header = () => {

  //delete all data stored when user log out
  const handleLogOut = ()=>{
    window.localStorage.clear(); //it be change to log in, log out and new account with  Auth0
    window.location.reload(true);
    window.location.replace('/')
  }
  const teacherId = localStorage.getItem('teacherId');
  const studentId = localStorage.getItem('student');

  return (
    <Wrapper>
      <Link to={`/`}>
        <Img src={Logo} ></Img>
      </Link>
      { localStorage.length === 0 ? <Div>
        <Link to={`/store`}>
          <Button>Store</Button>
        </Link>
        <Link to={`/help-center`}>
          <Button>Help center</Button>
        </Link>
        {/* <Link to={`/blog`}>
          <Button>Blog</Button> in progress...
        </Link>  */}
        <Link to={`/login`}>
          <Button>Log In</Button>
        </Link>
      </Div> : 
      //Header nav change if user connected
      <Div>
        <Link to={`/store`}>
          <Button>Store</Button>
        </Link> 
        <Link to={`/help-center`}>
          <Button>Help center</Button>
        </Link>
      { teacherId ? 
        <Link to={`/teachers/${teacherId}`}>
          <Button>My profile</Button> 
        </Link> : <Link to={`/students/${studentId}`}>
          <Button>My profile</Button> 
        </Link>}
          <Button onClick={handleLogOut}>Log out</Button>
      </Div>  }
    
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 98%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 0%;
  padding: 20px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 2;
  background-color: white;

`;

const Img = styled.img`
  width: 160px;
  height: 70px;
  margin-left: 30px;
  margin-top: 14%;
`;

const Div = styled.div`
  display: flex;
  gap: 8px;
  padding: 30px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: transparent;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  background: linear-gradient(
      to right,
      midnightblue,
      midnightblue
    ),
    linear-gradient(
      to right,
      yellow,
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 300ms;

  :hover {
    background-size: 0 3px, 100% 3px;
  }
`;

export default Header;
