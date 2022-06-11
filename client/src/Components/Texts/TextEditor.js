
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
//  useEffect(()=>{
// new Quill('#container', { theme: 'snow'  // or 'bubble'
//    });
//  }, [])


console.log(myProduction)
  return (
    <ReactQuill value={myProduction}
                  onChange={setMyProduction} />
  )
}

export default TextEditor;


const Container = styled.div`
 height: 375px;
 border: 1px solid violet
`;