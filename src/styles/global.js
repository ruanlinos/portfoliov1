import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    
  }
  body {
      -webkit-font-smoothing: antialiased;
      width: 100%;
      height: 100%;

  }
  html {
    font-size: 62.5%;
    @media ${props => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }

    @media ${props => props.theme.mediaQueries.large} {
          font-size: 57.5%;
      }

    @media ${props => props.theme.mediaQueries.small} {
          font-size: 55%;
      }
      
  }

  *:focus {
    outline: none; 

  html, body, #root {
    height: 100%;
  }
  

  @import url('https://fonts.googleapis.com/css?family=Lexend+Deca|Playfair+Display:400,700|Roboto:400,700&display=swap');
  }`;
