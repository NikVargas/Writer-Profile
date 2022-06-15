import Header from "./Header";
import styled from "styled-components";
import Working from "../Writer_Profile IMG/InProgress.png"
import Imgstore from "../Writer_Profile IMG/Store.png";
// it will be upgrade... in progress


const Store = () => {
  return (
    <>
    <Header/>
    <section>
      <h1>Store</h1>
        <Message>
        <ImgStore src={Imgstore} />
        <Img src={Working} />
        <Text><div>
          Sorry! Our products are out of stock ...
        </div>
        <div>Our staff work hard to get your favorites products back!</div>
        Thank you!</Text>
      </Message> 
    </section>
    </>
  )
};

export default Store;


const Message = styled.div`
margin-top: 1%;
display: flex;
gap: 5px;
width: 40%;
margin-left: 20%;
justify-content: center;
align-items: center;
flex-direction: column;
background: white;
padding: 3em;
height: 420px;
border-radius: 20px;
border-left: 1px solid white;
border-top: 1px solid white;
backdrop-filter: blur(10px);
box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
text-align: center;
font-size: 30px;
`;

const Text = styled.div`
margin-top: -8em;
`

const Img = styled.img`
max-width: 250px;
position: relative;
top: -16em;
left: 55%;
transform: rotate(30deg);
`;

const ImgStore = styled.img`
max-width: 350px;
z-index: 2;
position: relative;
top: -3em;
`;