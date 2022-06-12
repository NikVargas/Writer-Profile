import styled from "styled-components";
import Quill from "quill";
import { useState } from "react";




const QuillText = ()=>{

    const [ myProduction, setMyProduction] = useState("");
    const [correction, setCorrection] =useState()
    
    const textProduction = (e) =>{
      setMyProduction(e.target.value)
  
    }


      const modules = {
        toolbar: [
            ['bold', 'italic'],
            ['link', 'blockquote', 'code-block', 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
      }





return(
    <Quill
    modules={modules}
    placeholder="Compose an epic..."
    theme="snow">
        <Form>
            <input
            onChange={setMyProduction}></input>
        </Form>
    </Quill>
)

};

export default QuillText;


const EditorContainer = styled.div`
height: 375px;


`;

const Form = styled.form`

`;