import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      list-style: none;
      border: none;
    }
    html{
      scroll-behavior: smooth;
    }
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
        /* overflow: hidden; */
    }
    ul, li {
         list-style: none;
    }
    ::-webkit-scrollbar{
      width: 10px;
      background-color: ${({ theme }) => theme.background};
    }
    ::-webkit-scrollbar-thumb{
      border-radius: 10px;
      /* background-image: linear-gradient(${({ theme }) =>
				theme.container}, ${({ theme }) => theme.secondColor}); */
      background-color: ${({ theme }) => theme.secondColor};
    }
`;
