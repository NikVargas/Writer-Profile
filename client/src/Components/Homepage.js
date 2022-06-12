import styled from "styled-components";
import Header from "./Header/Header";
import notebook_img from "./notebook_img.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <Div>
        <Text>
          Help your students during the self-correction.
          <Link to={`/help-center`}>
          <Button>More Info</Button>
          </Link>
        </Text>
        <Img src={notebook_img} />
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: 120px;
`;

const Text = styled.div`
display: flex;
flex-direction: column;
font-size: 45px;
font-weight: bold;
z-index: 2;
`;

const Button = styled.button`
  padding: 10px 50px 10px;
  border-radius: 200px;
  box-shadow: 5px 5px midnightblue;
  top: 50px;
`;
const Img = styled.img`
max-width: 350px;
position: sticky;
`;


export default Homepage;
