import styled from "styled-components";
import Header from "./Header";
import { FcDocument, FcQuestions, FcComboChart, FcReading } from "react-icons/fc";


const HelpCenter = () => {
  
  
  
  return (
    <Section>
      {/* // it will be upgrade... in progress */}
      <Header />
      <h1> Writing Profile Help-Center</h1>
      <Div>
        <Hc> <FcDocument size={120} />
          <h2>Ressources</h2>
        </Hc>
        <Hc><FcQuestions size={120} />
          <h2>FAQ</h2>
        </Hc>
      </Div>
      <Div>
        <Hc><FcComboChart size={120} />
          <h2>Reports </h2>
        </Hc>
        <Hc><FcReading size={120} /> 
          <h2>User gruide</h2>
        </Hc>
      </Div>
    </Section>
  );
};

const Section = styled.section`

`

const Div = styled.div`
padding-top: 60px;
display: flex;
max-width: 100%;
justify-content: space-evenly;
`

const Hc = styled.div`
width: 240px;
height: 180px;
transform: scale(0.9, 0.9);
transition: transform 0.2s ease-in;
transform-origin: 50% 50%;
transform: translateY(4px) scale(1, 1);
transition: transform 0.2s ease-in;
&:hover {
    transform: scale(1, 1);
    transform: translateY(-7px) scale(1.05, 1.05);
}
`


export default HelpCenter;
