import styled from "styled-components";
import { Link } from "react-router-dom";
import TeacherAccount from "./TeacherAccount";



const LogIn = () =>{


    return(
        <div>
        <Section>
            <div>
            <Link to={`/`}>
            <div>Logo</div>
        </Link>
        <Link to={`/signin`}>
            <div>CREATE ACCOUNT</div>
        </Link>
            </div>
        <form>
            <h1>Log In</h1>
            <label>E mail</label>
            <input placeholder="email@myemail.com" required></input>
            <label>Password</label>
            <input placeholder="Password" required></input>
            <Link to={'/teacher-name'}> 
            <button> Submit</button>
            </Link>
        </form> 
        </Section>
        </div>
    )
}

const Section = styled.section`
margin-block-start: 80px;

`;

export default LogIn;