import styled from "styled-components";
import { Link } from "react-router-dom";
import TeacherAccount from "./TeacherAccount";
import Footer from "./Footer";
import Logo from "./Logo.png";



const LogIn = () =>{


    return(
        <div>
            <HeaderPage>
           
            <Link to={`/`}>
            <Img src={Logo}/>
        </Link>
        <Link to={`/sign-in`}>
            <div>CREATE ACCOUNT</div>
        </Link>
            </HeaderPage>
            <Section>
        <Form>
            <h1>Log In</h1>
            <label>E mail</label>
            <input placeholder="email@myemail.com" required></input>
            <label>Password</label>
            <input placeholder="Password" required></input>
            <Link to={'/teacher-name'}> 
            <button> LOG IN </button>
            <p>Forgot your password?</p>
            </Link>
        </Form> 
        </Section>
        <Footer/>
        </div>
    )
}


const HeaderPage = styled.div`
top: 0;
position: absolute;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto; 
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 90%;

`;

const Section = styled.section`
margin-block-start: 150px;
`;

const Img = styled.img`
width: 150px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

export default LogIn;