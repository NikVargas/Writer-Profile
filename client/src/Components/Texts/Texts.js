import AddText from "../Texts/AddText";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

// get and display all teacher's text on the dashboard for teacher account
const Texts = () => {
  const [texts, setTexts] = useState();
  const teacher = localStorage.getItem("teacherId");
  const student = useParams();
  const [addTextForm, setAddTextForm] = useState(false);

  const textsForm = () => {
    setAddTextForm(!addTextForm);
  };

  useEffect(() => {
    fetch(`/texts?teacherId=${teacher}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("texts by teacher", data.data);
        setTexts(data.data);
        // console.log(d)
      });
  }, [teacher]);

  return (
    <Wrapper>
      <Button onClick={textsForm}>Add Text </Button>
      {addTextForm && <AddText />}
      <MyTexts>
        {texts
          ? texts.map((text, i) => {
              return (
                <>
                  <Link to={`/texts/${text._id}`} key={i}>
                    <Div key={i}>{text.title}</Div>
                  </Link>
                </>
              );
            })
          : ""}
      </MyTexts>
      <></>
    </Wrapper>
  );
};



const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

`;

const MyTexts = styled.div`
 padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;


const Div = styled.div`
 display: flex;
  justify-content: space-evenly;
  padding: 1em;
  margin: 1rem;
  border-radius: 5px;
  background: #fff;
  width: 200px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  animation: slideIn 3s;
  :hover {
  transform: rotate(-5deg);
}
`;

const Button = styled.button`
width: 100px;
border-radius: 2000px;
font-size: 1rem;
padding: 5px;
background: midnightblue;
box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.15);
color: white;
  cursor: pointer;
  :hover{
    background: white;
    color: midnightblue ;
  }
`;

export default Texts;
