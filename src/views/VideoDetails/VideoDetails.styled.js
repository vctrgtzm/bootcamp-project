import styled from "styled-components";

export const VideoDetailsViewContainer = styled.div`
    display: flex;
    min-width: calc(100vw - 60px);
    min-height: 100vh;
    padding: 70px 30px 0px 30px;

    @media(max-width: 1200px){
        flex-flow: column; 
        padding: 50px 10px 0px 10px;
    }
`;
