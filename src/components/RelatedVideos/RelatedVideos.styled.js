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

export const RelatedVideoContainer = styled.div`
    background-color: #f8f9fa;
    min-height: 115px;
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    margin-right: 10px;
    cursor: pointer;
    font-family: 'Amatic SC', Arial;
    font-weight: bold;
    font-size: 24px;
    color: #03045E;
    transition: background-color .3s ease-out;

    &:hover {
        background-color: #e9ecef;
    }

    &:hover > div {
        background-size: 33vh;
    }
    
    & > span {
        flex-basis: 60%;
        margin: 12px;
        letter-spacing: 1px;
        overflow: hidden;
    }
`;

export const ThumbnailContainer = styled.div`
    background-color: #48CAE4;
    flex-basis: 40%;
    background-image: url(${props => props.thumbnail});
    background-size: 30vh;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-size .3s ease-out;
`;
