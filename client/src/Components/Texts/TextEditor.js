
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import ReactQuill from 'react-quill'
import { useState } from 'react';


const TextEditor = () =>{


    const [text, setText] = useState();
    const [ myProduction, setMyProduction] = useState("");
    
    const textProduction = (e) =>{
      setMyProduction(e.target.value)
      console.log(e.target.value)
    }
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   fetch("https://api.languagetool.org/v2/check", {
    //     body: new URLSearchParams({
    //       text: myProduction,
    //       language: "fr",
    //       level: "default",
    //     }),
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data)
    //     });
    // };


console.log(myProduction)
  return (
    <>
    <StyledReactQuill
      theme='snow'
      value={myProduction}
      onChange={setMyProduction}
      placeholder=" Be creatif and ask your-self the right questions!" />
                  
    </>
  )
}

export default TextEditor;

const StyledReactQuill = styled(ReactQuill)`
height: 60vh;
`;
