import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    *:focus{
        outline: none;
    }

    body {
        background-color: #E9ECEF;
    }
`;

export default GlobalStyle;