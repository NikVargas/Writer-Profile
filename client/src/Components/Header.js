import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Wrapper>
        <Link to={`/`}>
            <div>Logo</div>
        </Link>
        <div>
            <Link to={`/store`}>
                <button>Store</button>
            </Link>
            <Link to={`/help-center`}>
                <button>Help center</button>
            </Link>
            <Link to={`/blog`}>
                <button>Blog</button>
            </Link>
            <Link to={`/login`}>
                <button>Log In</button>
            </Link>
        </div>
        
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
height: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
position: absolute;
top: 0%;
padding: 20px;

`;

export default Header