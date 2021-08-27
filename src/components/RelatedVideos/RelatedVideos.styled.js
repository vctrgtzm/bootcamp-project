import styled from "styled-components";

export const RelatedVideosContainer = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 70px);
    overflow-y: scroll;    
    gap: 16px;
    padding: 30px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 1200px){
        flex-flow: column; 
        padding: 0;
        padding-bottom: 20px;
        max-height: unset;
    }
`;
