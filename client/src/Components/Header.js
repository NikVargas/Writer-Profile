import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Wrapper>
        <Link to={`/`}>
            <div>Logo</div>
        </Link>
        <Link to={`/signin`}>
            <button>Sign In</button>
        </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
position: absolute;
top: 0%;

`;

export default Header