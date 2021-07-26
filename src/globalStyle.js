import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    *:focus{
        outline: none;
    }
`;

export default GlobalStyle;