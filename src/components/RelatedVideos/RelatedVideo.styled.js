import { Link } from "react-router-dom";
import styled from "styled-components";

export const RelatedVideoContainer = styled(Link)`
    background-color: ${props => props.theme.videoCards.backgroundColor};
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    margin-right: 10px;
    cursor: pointer;
    font-family: ${props => props.theme.fontFam}, Arial;
    font-weight: bold;
    font-size: 24px;
    color: ${props => props.theme.fontColor};
    transition: background-color .3s ease-out;
    flex-shrink: 0;
    text-decoration: none;

    &:hover {
        background-color: ${props => props.theme.videoCards.backgroundColorHover};
    }

    /*FavButton*/
    &:hover svg{
        opacity: 1;
    }
`;

export const ThumbnailContainer = styled.div`
    background-color: ${props => props.theme.videoCards.thumbnailBackgroundColor};
    flex-basis: 40%;
    background-image: url(${props => props.thumbnail});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-size .3s ease-out;
    position: relative;
`;

export const TitleAndChannelContainer = styled.div`
    flex-basis: 60%;

    & > p {
        letter-spacing: 1px;
        margin: 12px;
    }
`;
