import { useEffect, useState } from "react";
import styled from "styled-components";



const Tests = () => {
const [errorsData, setErrorsData] = useState([]);
const [length, setLength] = useState();
const [offset, setOffset] = useState();

const text = "bonjour mon amis sont gentil";

const data = {
matches: [
    {
    context: { length: 7, offset: 0, text: "bonjour mon amis sont gentil" },
    contextForSureMatch: -1,
    ignoreForIncompleteSentence: true,
    length: 7,
    message: "Cette phrase ne commence pas par une majuscule.",
    offset: 0,
    remplacements: { 0: { value: "Bonjour" } },
    },
    {
    context: { length: 8, offset: 8, text: "bonjour mon amis sont gentil" },
    contextForSureMatch: 8,
    ignoreForIncompleteSentence: true,
    length: 8,
    message: "Le déterminant s’accorde avec le nom amis’.",
    offset: 8,
    remplacements: {
        0: { value: "mes amis" },
        1: { value: "mon ami" },
        2: { value: "mon amie" },
        3: { value: "mes amies" },
    },
    },
],
};


useEffect(() => {
setErrorsData(data.matches);
// console.log(errorsData)
// setLength(data.matches[0].context.length);
// console.log("length", length);
// console.log("offset", offset);
// setOffset(data.matches[0].context.offset);
}, []);


 console.log(  text.slice(8, 8));

const textSplit = text.split(" ");
const badWords = errorsData.map((error, i)=>{
    // console.log( text.slice(error.offset,(error.length + error.offset)))
    return(
       { bWord: text.slice(error.offset,(error.length + error.offset)),
        index: i }
    )
})


return (
<div>
    {textSplit ? textSplit.map((word)=>{
        console.log(badWords.includes(word))
        if( badWords.some(str => str.bWord.includes(word))){
            return <Wrong>{word} </Wrong>
        } else {
        return(
            <Correct>{word} </Correct>
        )
        }
    })     
: ""}
</div>
);
};

const Error = styled.p`
border: 1px yellowgreen solid;
width: fit-content;
`;

const Wrong= styled.span`
color: red;
`
const Correct= styled.span`

`

export default Tests;