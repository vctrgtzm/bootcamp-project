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
        background-color: ${props => props.theme.body.backgroundColor};
        overflow-x: hidden;
    }

    ::placeholder {
        opacity: 1;
        color: ${props => props.theme.placeholderColor}
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

    .custom-tooltip {
        letter-spacing: 1px !important;
        font-size: 18px !important;
    }
`;

export default GlobalStyle;
