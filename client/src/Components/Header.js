import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

const Header = () => {
  return (
    <Wrapper>
      <Link to={`/`}>
        <Img src={Logo}></Img>
      </Link>
      <Div>
        <Link to={`/store`}>
          <Button>Store</Button>
        </Link>
        <Link to={`/help-center`}>
          <Button>Help center</Button>
        </Link>
        <Link to={`/blog`}>
          <Button>Blog</Button>
        </Link>
        <Link to={`/login`}>
          <Button>Log In</Button>
        </Link>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  height: 60px;
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
  z-index: 2;


`;

const Img = styled.img`
  width: 160px;
`;

const Div = styled.div`
  display: flex;
  gap: 8px;
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
