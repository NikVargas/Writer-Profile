import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

* {
    margin: 0 ;
    padding: 0;
    border: 0;
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    font-family: 'Fira Sans Extra Condensed', sans-serif;
}

button {
    cursor: pointer;
}

section {
background-color: white;
margin-block-start: 140px;
width: 95vw;
min-height: 100vh;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
position: relative;
z-index: 1;
padding: 2rem;
}

h1 {
font-size: 40px;
color: midnightblue;
font-size: 30px;
font-weight: bolder;
position: sticky;

}


`;

export default GlobalStyles