
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TextEditor from "./TextEditor";




const TextDoc = () => {


  let { textId } = useParams();
  const [text, setText] = useState();
  const [ myProduction, setMyProduction] = useState("");
  
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
        console.log(data)
      });
  };





  return (
    <>
      <div>{ text ? 
      <h2>{text.title}</h2> : ""}</div>
      <form onSubmit={handleSubmit}>
        <textarea
        type="text"
        placeholder="My text"
        value={myProduction}
        onChange={textProduction}></textarea>
        <Container></Container>
        <button>submit</button>
      </form>
      <TextEditor/>
    </>
  );
};



const Container = styled.div`



`;


export default TextDoc;
