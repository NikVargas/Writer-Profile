import styled from "styled-components";


const Corrections =({word}) =>{

    return(
        <Wrong>{word} </Wrong>
    )
}

export default Corrections;

const Wrong= styled.span`
color: red;


`