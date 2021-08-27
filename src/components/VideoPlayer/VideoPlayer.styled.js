import { Link } from "react-router-dom";
import styled from "styled-components";

export const VideoDetailsContainer = styled.div`
    flex-basis: 60%;
    position: relative;
    font: bold 24px ${props => props.theme.fontFam}, arial;
    color: ${props => props.theme.fontColor};
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

export const BackToVideosButton = styled(Link)`
    background-color: #00B4D8;
    font: bold 20px ${props => props.theme.fontFam}, arial;
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
    text-decoration: none;

    &:hover{
        color:white;
        background-color: #0096C7;
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
