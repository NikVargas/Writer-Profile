import AddText from "../Texts/AddText";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Texts = () => {
  const [texts, setTexts] = useState();

  const teacher = localStorage.getItem("teacherId");
  const student = useParams()

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


  // useEffect(() => {
  //   fetch(`/texts?studentId=${student}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("student's text", data);
  //       setTexts(data.data);
  //       // console.log(d)
  //     });
  // }, [student]);

console.log(student.studentId)

  return (
    <Wrapper>
      <Button onClick={textsForm}>Add Text </Button>
      <MyTexts>
      {texts
        ? texts.map((text) => {
            return (
              <>
                <Link to={`/${text._id}`}>
                  <Div>{text.title}</Div>
                </Link>
              </>
            );
          })
        : "loading"}
        </MyTexts><>
        {student.studentId === 0}
        
      {addTextForm && <AddText />}
      </>
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
