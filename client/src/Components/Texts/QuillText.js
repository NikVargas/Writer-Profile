
import hljs from "highlight.js";
import Quill, { Delta, useQuill } from "quill/";
import "/node_modules/quill/dist/quill.snow.css";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";



const QuillText = () => {
  let [text, setText] = useState();
  const [errorMatches, setErrorMatches] = useState();





  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const sendToCorrect = (e) => {
    e.preventDefault();
    fetch("https://api.languagetool.org/v2/check", {
      body: new URLSearchParams({
        text: text,
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
        console.log("error matches",data);
        setErrorMatches(data);
      });
  };
  //display Quill Text editor
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    let quill = new Quill(editor, {
      modules: {
        syntax: {
          highlight: (text) => hljs.highlightAuto(text).value,
        },
        //adding toolbar to Quill editor
        toolbar: toolbarOptions,
      },
      theme: "snow",
      placeholder: "compose an epic...",
    });

    //Grammar correction with fetch data res API LanguageTool
    quill.on("text-change", (Delta, oldDelta, source) => {
      let text = quill.getText();
      console.log("text", text);
      quill.off();

    quill.once("text-change", () => {
        quill.updateContents(0, 1, {
          bold: true,
          color: "rgb(255, 0, 0)",
        });
      });
      quill.off();
      
    });
  }, []);



  return (
    <>
      <form onSubmit={sendToCorrect}>
        <Div id="container" ref={wrapperRef}></Div>
        <div id="counter"></div>
        <Button>Correct my text</Button>
        <Button disabled={true}>Send text to my teacher</Button>
      </form>

    </>
  );
};

export default QuillText;

const Div = styled.div`
  height: 100px;
  width: 94vw;
`;

const Button = styled.button`
  z-index: 3;
  padding: 10px;
  margin: 90px 10px 10px 0px;
`;



