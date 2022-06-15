import styled from "styled-components";


const Nav = ()=>{

    return(
<Wrapper>
  <Label>
    <MenuButton/>
    <IconWrapper>
      <Hamburger>
        <Input type="checkbox"/>
        <HamburgerLine1 ></HamburgerLine1>
        <HamburgerLine2 ></HamburgerLine2>
        <HamburgerLine3 ></HamburgerLine3 >
      </Hamburger>
    </IconWrapper>
    <ItemList>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Profile</Item>
      <Item>Contact</Item>
    </ItemList>
  </Label>

</Wrapper>
    )
}

const Wrapper = styled.div`
text-align: center;
z-index: 3;
padding-top: 100px;
`;

const Label = styled.label`
position: relative;
display: inline-block;
`

const Hamburger = styled.label`
position: relative;
  width: 30px;
  height: 30px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;
:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(to right, black, midnightblue); 
    transform: rotate(0deg);
    transition: all 0.4s cubic-bezier(0.54, -0.10, 0.57, 0.57);
  }
  `;

 const Input = styled.input` 
    position: absolute;
    opacity: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
  `;
  
  const HamburgerLine1 = styled.span `
    width: 100%;
    background: #fff;
    height: 2px;
    display: block;
    border-radius: 6px;
    transition: transform 0.4s cubic-bezier(0.54, -0.81, 0.57, 0.57);
    position: relative;
    :checked {
    transform: translate(2px, 8px) rotate(-135deg);
  }
    `;

const HamburgerLine2 = styled.span `
    width: 50%;
    background: #fff;
    height: 2px;
    display: block;
    border-radius: 6px;
    transition: transform 0.4s cubic-bezier(0.54, -0.81, 0.57, 0.57);
    position: relative;

    :checked  {
    transform: rotate(-45deg); 
  }
    `;

const HamburgerLine3 = styled.span `
width: 100%;
background: #fff;
height: 2px;
display: block;
border-radius: 6px;
transition: transform 0.4s cubic-bezier(0.54, -0.81, 0.57, 0.57);
position: relative;
margin-left: 50%;
transform-origin: left;
:checked {
    transform: translate(11px, -3px) rotate(-135deg);
  }
`;


const MenuButton = styled.input `
  position: absolute;
    width: 70px;
    height: 70px;
    left: 0;
    z-index: 2;
    opacity: 0;
    cursor: pointer;

    :checked ~ ItemList {
    transform: translateX(-50%) scale(1);
    border-radius: 20px;
    opacity: 1;
    user-select: auto;
  } 
  `;

 const ItemList = styled.div `
    position: absolute;
    top: 90px;
    transform: translateX(-50%) scale(0);
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.54, -0.10, 0.57, 0.57);
    background-color: #303242;
    color: #fff;
    width: 200px;
    left: 50%;
    padding: 15px 0;
    text-align: left;
    border-radius: 100px;
    font-weight: 300;
    opacity: 0;
    user-select: none;

    :checked {
    transform: translateX(-50%) scale(1);
    border-radius: 20px;
    opacity: 1;
    user-select: auto;
    }
    `;

    
   const Item = styled.div`
      padding: 10px 30px;
      cursor: pointer;
    `;
  

const IconWrapper = styled.div`
:checked icon-wrapper  {
    transform: rotate(-45deg); 
    transform: translate(2px, 8px) rotate(-135deg);
    transform: translate(11px, -3px) rotate(-135deg);
    :before {
    transform: rotate(45deg);
  }
  }

`


export default Nav;