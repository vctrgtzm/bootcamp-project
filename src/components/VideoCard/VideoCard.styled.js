import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const VideoRelativeContiner = styled.div`
    position: relative;
    min-width: 100%;
    display: flex;
    justify-content: center;
`;

export const VideoItemContainer = styled(Link)`
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
    text-decoration: none;

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
        &:hover > .description-container{
            display: block;
        }

        /*FavButton*/
        &:hover svg{
            opacity: 1;
        }
    }

    & > h2{
        margin: 12px;
        letter-spacing: 1px;
    }
`;

export const ThumbnailContainer = styled.div`
    min-height: 185px;
    background-color: ${props => props.theme.videoCards.thumbnailBackgroundColor};
    background: linear-gradient(to left top, black, transparent 30%),
                url(${props => props.thumbnail});
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-size .3s ease-out;
    position: relative;
`;

export const FavButton = styled(FontAwesomeIcon)`
    position: absolute;
    bottom: 12px;
    right: 12px;
    color: #EF233C;
    opacity: 0;
    transition: color .2s ease-out,
                opacity .3s ease-out;

    &:hover{
        color: #D90429;
    }
`;

export const FavButtonBlue = styled(FavButton)`
    color: #48CAE4;
    opacity: 1;

    &:hover{
        color: #00B4D8;
    }
`;

export const LoadingIndicator = styled.div`
    background-color: ${props => props.theme.loadingIndicatorColor};
    width: 0px;
    height: 5px;
    transition: width .5s ease-out;
    border-radius: 10px;
`;

export const DescriptionContainer = styled.div`
    overflow: hidden;
    display: none;
    animation: fade 2s ease-out .5s 1 normal forwards;
    max-height: 0px;
    margin: 12px;

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
    }
`;
