import { createGlobalStyle } from "styled-components";

import FuturaBook from "../assets/fonts/Futura-Book.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Futura-Book';
    src: url(${FuturaBook}) format('truetype');
    font-weight: normal;
    font-style: normal; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #ffffff;
    font-family: 'Futura-Book', sans-serif;

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track { 
        background: #ffffff;
    }
    
    ::-webkit-scrollbar-thumb { 
        background: #121212;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #121212;
    }
  }

  body {
    background-color: #121212;
  }
`;
