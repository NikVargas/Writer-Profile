import Quill from "quill/";
import "/node_modules/quill/dist/quill.snow.css"
import { useCallback } from "react";
import styled from "styled-components";

 const QuillText = () =>{
  
  const wrapperRef = useCallback(wrapper=>{
   
    if (wrapper == null) return
    wrapper.innerHTML = ""
    const editor = document.createElement('div')
    wrapper.append(editor)
    new Quill(editor, {theme: "snow"})
    //You got it!!!dfgdsfg
  }, [])

   return (
   <Div id="container" ref={wrapperRef}></Div>
   
   )
 };


 export default QuillText;

const Div = styled.div`

`

// const QuillText = () =>{

// const wrapperRef = useCallback((wrapper)=>{
//   if(wrapper === null){
//     return wrapper = ""
//   }
// }, [],);



//   return(
//     <>
//     { wrapper === null ? "" :
//     <EditorDiv> 
//       {new Quill( <div id="container" ref={wrapperRef}></div>, {theme: "snow"})}
//     </EditorDiv>
//     }
    
//     {/* <div ref={wrapperRef}></div> */}
    
    
    
//     </>
//   )
// }

// export default QuillText;



// const EditorDiv= styled.div`

// `



