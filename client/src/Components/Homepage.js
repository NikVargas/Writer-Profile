import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Homepage = () =>{

    return(
        <Wrapper>
            <Header />
            <Div>
                I'm the homepage 
                <button>More Info</button>
            </Div>
            <Footer />
        </Wrapper>
    )
};

const Wrapper = styled.div`

`


const Div = styled.div`
margin-block-start: 120px;

`;


export default Homepage;