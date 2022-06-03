import styled from "styled-components";


const Footer = () =>{

    return(
        <Wrapper>
            <div>
                WritingProfile
            </div>
            <div>
                CONTACT
            </div>
            <div>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>About Us</p>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 100%;
height: 80px;
background-color: pink;
display: flex;
flex-direction: row;
justify-content: space-between;
position: absolute;
bottom: 0%;

`;


export default Footer