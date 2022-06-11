import styled from "styled-components";
import Header from "./Header/Header";
import notebook_img from "./notebook_img.png";

const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <Div>
        <Text>
          Help your students during the self-correction of texts.
          <Button>More Info</Button>
        </Text>
        <Img src={notebook_img} />
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 0;
  background-image: linear-gradient(
    to bottom,
    transparent 50%,
    midnightblue 50%
  );

  :after {
    content: "";
    display: block;
    min-height: 98vh;
  }
`;
const Div = styled.div`
  width: 90%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  mix-blend-mode: difference;
  min-height: 98vh;
`;

const Img = styled.img`
  max-width: 350px;
  z-index: 2;
`;

const Button = styled.button`
  padding: 10px 50px 10px;
  border-radius: 200px;
  box-shadow: 5px 5px midnightblue;
  position: relative;
  top: 40px;
`;

const Text = styled.div`
  font-size: 45px;
  font-weight: bold;
  z-index: 2;
`;

export default Homepage;
