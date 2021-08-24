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

    @media(max-width: 768px){
        flex-flow: column; 
        padding: 10px;
        padding-bottom: 20px;
        max-height: unset;
    }
`;
