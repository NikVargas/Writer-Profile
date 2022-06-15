
import { useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import QuillText from "./QuillText";


const TextDoc = () => {

  const [text, setText] = useState();
  const [ myProduction, setMyProduction] = useState("");
  const [correction, setCorrection] =useState()
  const [badWords, setBadWords] =useState([])
  const [ trigger, setTrigger] = useState(false);

  const textProduction = (e) =>{
    setMyProduction(e.target.value)
  }


const handleSubmit = (e) => {
  e.preventDefault();
  fetch("https://api.languagetool.org/v2/check", {
    body: new URLSearchParams({
      text: myProduction,
      language: "fr",
      level: "default",
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((data) => {
   
      console.log(data)
      setCorrection(data.matches)
      setBadWords(data.matches?.map((error, i)=>{
      // console.log( text.slice(error.offset,(error.length + error.offset)))
      return(
        { bWord: myProduction.slice(error.offset,(error.length + error.offset)),
          index: i }
      )
  })
)
      
    });
};

  return (
    <>
    <Header/>
    <Wrapper>
      <div>{ text ? 
      <h2>{text.title}</h2> : ""}</div>
        <Form onSubmit={handleSubmit}>
 <div>
      { correction ? myProduction.split(" ").map((word, i)=>{
        if(badWords.some(str => str.bWord.includes(word))){
            return <Wrong key={i}>{word} </Wrong>
        } else {
        return(
            <Correct key={i}>{word} </Correct>
        )
        }
    })     
:   <Textarea
        id="editor"
        type="text"
        placeholder="My text"
        value={myProduction}
        onChange={textProduction}></Textarea>}</div>
        <Container></Container>
        <Button>Correct my text</Button>
        
        <Button disabled={ myProduction.length > 0 ? false : true}>
          Send text to my teacher
          </Button>
      </Form>
     
      
       {/* <Quill>
         <QuillText/>
        </Quill>  */}
      </Wrapper>
    </>
  );
};

export default TextDoc;


const Wrapper = styled.section`
`;

const Container = styled.div`
`;

const Textarea = styled.textarea`
width: 90vw;
min-height: 30vh;
border: 1px solid midnightblue;
padding: 20px;
margin-top: 10px;
`;

const Form = styled.form`
`;

const Wrong= styled.span`
color: red;
`
const Correct= styled.span`
`
const Button = styled.button`
  z-index: 3;
  padding: 10px;
  margin: 20px 10px 10px 0px;
`;

const Quill = styled.div`
margin-top: 10px;
`