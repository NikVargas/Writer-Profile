import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div>WritingProfile</div>
      <div>CONTACT</div>
      <div>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>About Us</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: white;
`;

export default Footer;
