import styled from "styled-components";
import Header from "./Header/Header";
import notebook_img from "./Writer_Profile IMG/notebook_img.png";
import Rating from "./Writer_Profile IMG/Stars.png"
import { Link } from "react-router-dom";
import Nav from "./Nav";



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
      <Div1>
      <ImgRating src={Rating} />
      <Comment>The must appreciated writing method by teachers and students! </Comment>
      </Div1>
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
box-sizing: border-box;
`;

const Div1 = styled.div`
  padding-top: 60px;
  padding-bottom: 20px;
  margin: 5% 0 5% 10% 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: 120px;
`;

const ImgRating = styled.img`
max-width: 350px;
position: sticky;
`;

const Comment = styled.div`
display: flex;
flex-direction: column;
font-size: 45px;
font-weight: bold;
z-index: 2;
`;


export default Homepage;
