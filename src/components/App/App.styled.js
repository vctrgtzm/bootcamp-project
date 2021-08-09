import styled from "styled-components";

export const LoadingIndicator = styled.div`
    min-height: 5px;
    background-color: #00B4D8;
    animation-name: loading;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    position: absolute;
    width: 30%;
    top: 70px;

    @keyframes loading {
        0% {
            left: -10%;
            width: 0%;
        }
        50% {
            width: 30%;
        }
        100% {
            left: 110%;
            width: 0%;
        }
    }
`;

export const ErrorContainer = styled.div`
    padding-top: 100px;
    padding: 100px 10px 10px 10px;
    color: #03045E;
    width: 100%;
    text-align: center;

    * {
        letter-spacing: 2px;
    }

    h1 {
        font: bold 28px 'Amatic SC', arial;
        margin-bottom: 30px;
    }

    p {
        font: bold 20px 'Amatic SC', arial;
    }


`;