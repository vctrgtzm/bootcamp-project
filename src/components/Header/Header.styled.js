import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    background-color: ${props => props.theme.header.backgroundColor};
    height: 70px;
    width: 100%;
    font: bold 28px ${props => props.theme.fontFam}, arial;
    color: ${props => props.theme.fontColor};
    display: flex;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
    padding: 0 30px;
    z-index: 3;

    @media(max-width: 768px){
        padding: 0 10px;
    }
`;

export const HeaderSection = styled.section`
    flex-basis: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
`;

export const HeaderSectionLeft = styled(HeaderSection)`
    justify-content: flex-start;
`;

export const HeaderSectionCenter = styled(HeaderSection)`
    justify-content: center;
    padding: 0 16px;

    @media(max-width: 768px){
        width: 100%;
        flex-shrink: .4;
    }
`;

export const HeaderSectionRight = styled(HeaderSection)`
    justify-content: flex-end;
    padding-left: 16px;
`;

export const Logo = styled.img`
    width: 70px;
    height: auto;
    margin-right: 16px;

    &:hover {
        cursor: pointer;
    }
`;

export const NavigationItems = styled.nav`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`;

export const MenuIconContainer = styled.div`
    display: none;
    cursor: pointer;
    position: relative;
`;

export const NavigationItem = styled.div`
    margin: 0 16px;
    transition: color .2s ease-out;

    &:hover{
        color: ${props => props.theme.fontColorHover};
        cursor: pointer;
    }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
    font: bold 24px ${props => props.theme.fontFam}, arial;
    background-color: transparent;
    border: 1px solid ${props => props.theme.header.searchInputBorderColor};
    border-radius: 10px 0px 0px 10px;
    padding: 4px 8px;
    color: ${props => props.theme.fontColor};
    width: 70%;
    min-width: 180px;
    transition: background-color .2s ease-out;

    &:focus{
        background-color: ${props => props.theme.header.searchInputFocusBackgroundColor};
    }

    @media(max-width: 768px){
        width: 100%;
    }

`;

export const SearchButton = styled.button`
    padding: 10px;
    border-radius: 0px 10px 10px 0px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.header.searchInputBorderColor};
    border-left: none;
    color: ${props => props.theme.fontColor};
    cursor: pointer;
    transition: background-color .2s ease-out;  

    &:hover, &:focus{
        background-color: ${props => props.theme.header.searchInputFocusBackgroundColor};
    }

`;

export const AvatarContainer = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: ${props => props.theme.header.avatarBackgroundColor};
    background-image: url(${props => props.avatarUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.header.avatarIconColor};
    position: relative;

    &:hover{
        cursor: pointer;
    }
`;

export const ThemeToggle = styled(FontAwesomeIcon)`
    transition: transform .2s linear;

    &:hover{
        cursor: pointer;
        transform: rotate(180deg);
    }
`;

export const LogoutButton = styled.button`
    position: absolute;
    width: 65px;
    font: bold 20px ${props => props.theme.fontFam}, arial;
    top: 60px;
    right: 20px;
    background-color: ${props => props.theme.header.backgroundColor};
    border: 1px solid ${props => props.theme.header.searchInputBorderColor};
    padding: 4px 8px;
    border-radius: 10px;
    color: ${props => props.theme.fontColor};
    cursor: pointer;
    transition: opacity .3s linear;

    &:hover {
        opacity: .8;
    }
`;