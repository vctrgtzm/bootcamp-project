import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
    padding-top: 40px;
    position: fixed;
    z-index: 4;
    width: 250px;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: ${props => props.theme.header.backgroundColor};
    box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
    color: ${props => props.theme.fontColor};
    animation-name: side-menu-animation;
    animation-duration: .4s;

    @keyframes side-menu-animation{
        0% {left: -250px}
        100% {left: 0}
    }
`;

export const CloseSideMenuButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
    transition: opacity .2s ease-out;

    &:hover {
        opacity: .5;
}
`;

export const MenuOption = styled(Link)`
    display: block;
    font: bold 24px ${props => props.theme.fontFam}, arial;
    text-align: center;
    padding: 12px;
    color: inherit;
    border-bottom: 1px solid ${props => props.theme.header.searchInputBorderColor};
    transition: background-color .2s ease-out;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        background-color: ${props => props.theme.header.searchInputFocusBackgroundColor};
    }

    :visited {
        color: inherit;
    }
`;
