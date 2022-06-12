
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import QuillText from "./QuillText";
import TextEditor from "./TextEditor";




const TextDoc = () => {


  let { textId } = useParams();
  const [text, setText] = useState();
  const [ myProduction, setMyProduction] = useState("");
  const [correction, setCorrection] =useState()
  
  const textProduction = (e) =>{
    setMyProduction(e.target.value)
  }

  console.log(myProduction)
  console.log(textId);
  useEffect(() => {
    fetch(`/texts/${textId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          setText(data.data);
          // localStorage.setItem("groupId", `${groupId}`)
        }
      });
  }, [textId]);






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
        console.log(data.matches)
        setCorrection(data.matches)
      });
  };

  return (
    <>
    <Header/>
    <Wrapper>
      <div>{ text ? 
      <h2>{text.title}</h2> : ""}</div>
      
      <Form onSubmit={handleSubmit}>
        <Textarea
        type="text"
        placeholder="My text"
        value={myProduction}
        onChange={textProduction}></Textarea>
        <Container></Container>
        <button>submit</button>
      </Form>
        {correction ? 
        correction.map((error)=>{
          return(
            <>
            <div>{error.message}</div>
            <div>{error.offset}</div>
            <div>{error.length}</div>
            {}
            {/* <div>{error.replacements}</div> */}
            </>
          )
        }): ""}
      
      {/* <TextEditor/>  */}
      <Quill>
         <QuillText/>
        </Quill> 
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

const Quill = styled.div`

`