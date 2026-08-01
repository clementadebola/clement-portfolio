"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{

scroll-behavior:smooth;

}

body{

background:#06070A;

color:white;

font-family:var(--font-inter);

overflow-x:hidden;

}

a{

text-decoration:none;

color:inherit;

}

button{

border:none;

outline:none;

cursor:pointer;

}

img{

display:block;

max-width:100%;

}

`;

export default GlobalStyles;