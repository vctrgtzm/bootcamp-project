import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export const TitleAndFavButton = styled.div`
    display: flex;
    justify-content: space-between;

    & > h2{
        margin: 12px 12px 0px 0px;
    }
`;

export const FavButton = styled(FontAwesomeIcon)`
    margin-top: 20px;
    transition: color .2s ease-out;
    color: #EF233C;
    cursor: pointer;

    &:hover{
        color: #D90429;
    }
`;

export const FavButtonBlue = styled(FavButton)`
    color: #48CAE4;

    &:hover{
        color: #00B4D8;
    }
`;
