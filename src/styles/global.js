import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700;1,900&display=swap');

  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html,body,#root{
    height:100%;
  }
  body{
    -webkit-font-smoothing-:antialiased;
  }
  body,input,button{
    font-family: 'Lato','Roboto', sans-serif
  }
  a{
    text-decoration: none
  }
  ul{
    list-style: none
  }
  button,a{
    cursor: pointer
  }

`;
