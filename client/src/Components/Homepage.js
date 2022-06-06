import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Homepage = () =>{

    return(
        <div>
            <Header />
            <Div>
                I'm the homepage
            </Div>
            <Footer />
        </div>
    )
};

const Div = styled.div`
margin-block-start: 120px;
`;


export default Homepage;