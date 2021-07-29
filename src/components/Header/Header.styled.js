import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    background-color: #DEE2E6;
    height: 70px;
    width: 100%;
    font: bold 28px 'Amatic SC', arial;
    color: #03045E;
    display: flex;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
    padding: 0 30px;

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
        color: #48cae4;
        cursor: pointer;
    }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
    font: bold 24px 'Amatic SC', arial;
    background-color: transparent;
    border: 1px solid #adb5bd;
    border-radius: 10px;
    padding: 4px 8px;
    color: #03045E;
    width: 50%;
    min-width: 200px;

    &:focus{
        background-color: #e9ecef;
    }

    @media(max-width: 768px){
        width: 100%;
    }

`;

export const AvatarContainer = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #48CAE4;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #90E0EF;

    &:hover{
        cursor: pointer;
    }
`;

export const ThemeToggleContainer = styled.div`

    &:hover{
        cursor: pointer;
    }
`;
