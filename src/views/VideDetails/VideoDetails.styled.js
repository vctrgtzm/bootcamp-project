import styled from "styled-components";

export const BackToVideosButton = styled.button`
    background-color: #00B4D8;
    font: bold 20px 'Amatic SC', arial;
    padding: 12px;
    border: none;
    color: #E9ECEF;
    position: absolute;
    right: 15px;
    bottom: 60px;   
    opacity: 0;
    transition: opacity .3s ease-out, color .2s linear, background-color .2s linear;
    cursor: pointer;
    z-index: 10;
    border-radius: 10px;

    &:hover{
        color:white;
        background-color: #0096C7;
    }
`;

export const VideoDetailsViewContainer = styled.div`
    display: flex;
    min-width: calc(100vw - 60px);
    min-height: 100vh;
    padding: 70px 0px 0px 30px;

    @media(max-width: 768px){
        flex-flow: column; 
        padding: 50px 10px 0px 10px;
    }
`;

export const VideoDetailsContainer = styled.div`
    flex-basis: 60%;
    position: relative;
    font: bold 24px 'Amatic SC', arial;
    color: #03045E;
    padding: 30px 0px 12px;

    & > h2, & > p {
        margin: 12px 0px 0px;
    }
`;

export const VideoContainer = styled.div`
    position: relative;

    &:hover > button {
        opacity: 1;
    }
`;

export const IFameContainer = styled.div`
    height: 0;
    padding-bottom: 56.25%; /*youtybe videos aspect ratio */
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);    

    & > iframe{
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

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
