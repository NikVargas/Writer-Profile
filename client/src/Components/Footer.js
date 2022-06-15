import styled from "styled-components";
import Logo from "./Writer_Profile IMG/LogoW&B.png";


// eventually, the more information will be display here
const Footer = () => {
  return (
    <Wrapper>
      <Img src={Logo}/>
    </Wrapper>
  );
};


export default Footer;


const Wrapper = styled.div`
  bottom: 0%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: sticky;
  width: 92vw;
  color: white;
  background: midnightblue;
  display: grid;
  place-items: center;
  padding: 50px;
`;

const Img = styled.img`
width: 200px;
`

