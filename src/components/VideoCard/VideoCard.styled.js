import styled from "styled-components";

export const VideoRelativeContiner = styled.div`
    position: relative;
    min-width: 100%;
    display: flex;
    justify-content: center;
`;

export const VideoItemContainer = styled.div`    
    border-radius: 10px;
    overflow: hidden;
    background-color: ${props => props.theme.videoCards.backgroundColor};
    font-family: ${props => props.theme.fontFam}, Arial;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
    cursor: pointer;
    color: ${props => props.theme.fontColor};
    transition: background-color .3s ease-out, min-width .3s ease-out;
    min-height: 100%;
    min-width: 100%;

    @media(min-width: 768px){
        &:hover {
            background-color: ${props => props.theme.videoCards.backgroundColorHover};
            position: absolute;
            z-index: 2;
            min-width: 105%;
        }

        &:hover > div {
            background-size: 120%;
        }

        /*LoadingIndicator*/
        &:hover > div:nth-of-type(2){
            width: 100%;
        }

        /*DescriptionContainer*/
        &:hover > div:nth-of-type(3){
            margin: 12px;
            display: block;
        }
    }

    & > h2{
        margin: 12px;
        letter-spacing: 1px;
    }
`;

export const ThumbnailContainer = styled.div`
    min-height: 185px;
    background-image: url(${props => props.thumbnail});
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-size .3s ease-out;
`;

export const LoadingIndicator = styled.div`
    background-color: ${props => props.theme.loadingIndicatorColor};
    width: 0px;
    height: 5px;
    transition: width .8s ease-out;
    border-radius: 10px;
`;

export const DescriptionContainer = styled.div`
    overflow: hidden;
    display: none;
    animation: fade 2s ease-out .8s 1 normal forwards;
    max-height: 0px;

    & > p {
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: bold;
    }

    @keyframes fade {
        0% {
            max-height: 0px;
        }
        100% {
            max-height: 500px;
        }
    }

    @media(max-width: 768px){
        display: block;
        margin: 12px;
    }
`;
