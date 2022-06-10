
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TextEditor from "./TextEditor";




const TextDoc = () => {


  let { textId } = useParams();
  const [text, setText] = useState();
  const [ myProduction, setMyProduction] = useState();
  
  const textProduction = (e) =>{
    setMyProduction(e.target.value)
  }

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



  useEffect(()=>{
    // new Quill("Container", {theme: 'snow'})
  }, [])

//   const userText = () => {
//     fetch(`/texts/${textId}`, {
//         body: JSON.stringify({ status: tweetMessage }),
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         }
// })};



  return (
    <>
      <div>{ text ? 
      <h2>{text.title}</h2> : ""}</div>
      <form>
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
