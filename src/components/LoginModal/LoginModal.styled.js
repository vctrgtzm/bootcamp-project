import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    backdrop-filter: blur(4px);
    z-index: 1000;
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    z-index: 1000;
    border-radius: 10px;
    background-color: ${props => props.theme.videoCards.backgroundColor};
    font-family: ${props => props.theme.fontFam}, Arial;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
    color: ${props => props.theme.fontColor};
    min-width: 300px;
`;

export const FormContainer = styled.div`
    position: relative;
    padding: 32px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 20px;
`;

export const CloseButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
    opacity: .6;

    &:hover{
        opacity: 1;
    }
`;

export const Logo = styled.img`
    width: 70px;
    height: auto;
    display: block;    
`;

export const Input = styled.input`
    font: bold 24px ${props => props.theme.fontFam}, arial;
    background-color: transparent;
    border: 1px solid ${props => props.theme.header.searchInputBorderColor};
    border-radius: 10px;
    padding: 4px 8px;
    color: ${props => props.theme.fontColor};
    transition: background-color .2s ease-out;
    display: block;
    width: 100%;

    &:focus{
        background-color: ${props => props.theme.header.searchInputFocusBackgroundColor};
    }
`;

export const Button = styled.button`
    font: bold 24px ${props => props.theme.fontFam}, arial;
    width: 100%;
    background-color: ${props => props.theme.header.searchInputFocusBackgroundColor};
    border: 1px solid ${props => props.theme.header.searchInputBorderColor};
    padding: 4px 8px;
    border-radius: 10px;
    color: ${props => props.theme.fontColor};
    transition: background-color .2s ease-out;
    cursor: pointer;

    &:hover{
        background-color: transparent;
    }
`;

export const ErrorContainer = styled.div`
    font: normal 20px ${props => props.theme.fontFam}, arial;
    color: white;
    padding: 2px;
    width: 100%;
    background-color: #e63946;
    border-radius: 10px;
    text-align: center;
`;
