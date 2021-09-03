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
    }

    ::placeholder {
        opacity: .7;
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

        .full-opacity-mobile{
            opacity: 1;
        }
    }

    .custom-tooltip {
        letter-spacing: 1px !important;
        border-radius: 10px !important;
        font: bold 18px ${props => props.theme.fontFam}, arial !important;
    }
`;

export default GlobalStyle;
