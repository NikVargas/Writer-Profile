import Quill, { Delta, useQuill } from "quill/";
import "/node_modules/quill/dist/quill.snow.css";
import "/node_modules/highlightjs/styles/monokai-sublime.css";
import hljs from "/node_modules/highlightjs/highlight.pack.js"
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import quill from "quill/core/quill";
import { SyntaxCodeBlock as CodeBlock, CodeToken} from '/node_modules/quill/modules/syntax'


const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];


const QuillText = () => {


  //display Quill Text editor
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, {
      modules: {
        syntax: false,
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });
  }, []);


  //Changes on the editor
useEffect

  return(
  <Div id="container" ref={wrapperRef}></Div>
  
  );
};

export default QuillText;

const Div = styled.div`
height: 200px;
width: 95vw;

`;




