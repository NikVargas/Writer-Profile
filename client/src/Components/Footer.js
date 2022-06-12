import styled from "styled-components";
import Logo from "/Users/nikollevargas/Desktop/WD.Bootcamp/WD_Final-Project/client/src/Components/Logo (2).png";

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
  width: 98%;
  color: white;
  background: midnightblue;
  display: grid;
  place-items: center;
  padding: 50px;
  * {
  box-sizing: border-box;
}
`;

const Img = styled.img`
width: 200px;
`

