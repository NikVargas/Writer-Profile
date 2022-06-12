import styled from "styled-components";
import Header from "./Header";



const HelpCenter = () => {
  
  
  
  return (

    

  <Section><Header/>
    <h1> Writing Profile Help-Center</h1>
    <Div>
    <div><h2>Documentation</h2></div>
    <div><h2>FAQ</h2></div>
    </Div>
  </Section>
  
  )
};

const Section = styled.section`


`

const Div = styled.div`
display: flex;
gap: 30px;
padding: 40px;
`

export default HelpCenter;
