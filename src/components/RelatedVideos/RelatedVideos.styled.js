import styled from "styled-components";

export const RelatedVideosContainer = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 70px);
    overflow-y: scroll;    
    gap: 16px;
    padding: 30px 0px 30px 30px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > p {
        font: bold 28px ${props => props.theme.fontFam}, arial;
        text-align: center;
        color: ${props => props.theme.fontColor};
    }

    @media(max-width: 1200px){
        flex-flow: column; 
        padding: 0;
        padding-bottom: 10px;
        max-height: unset;
    }
`;
