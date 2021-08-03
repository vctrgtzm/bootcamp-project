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
        overflow-x: hidden;
    }

    @media(max-width: 768px){
        .hidden-mobile{
            display: none;
        }
    }

    @media(max-width: 768px){
        .display-block-mobile{
            display: block;
        }
    }
`;

export default GlobalStyle;
