import {
    StyledHeader,
    Logo,
    HeaderSectionLeft,
    HeaderSectionCenter,
    HeaderSectionRight,
    SearchInput,
    AvatarContainer,
    ThemeToggleContainer,
    NavigationItems,
    NavigationItem,
    MenuIconContainer
} from './Header.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../../logo.png';

function Header() {
    return (
        <StyledHeader role="heading" data-testid="header">
            <HeaderSectionLeft>
                <Logo role="img" alt="the icon of the app" src={logo}></Logo>
                <NavigationItems role="navigation">
                    <NavigationItem>Home</NavigationItem>
                    <NavigationItem>Favorites</NavigationItem>
                </NavigationItems>
                <MenuIconContainer>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </MenuIconContainer>
            </HeaderSectionLeft>
            <HeaderSectionCenter>
                <SearchInput role="search" type="text" placeholder="Search..." />
            </HeaderSectionCenter>
            <HeaderSectionRight>
                <ThemeToggleContainer role="switch">
                    <FontAwesomeIcon icon={faAdjust} size="sm" />
                </ThemeToggleContainer>
                <AvatarContainer role="figure">
                    <FontAwesomeIcon icon={faUser} size="sm" />
                </AvatarContainer>
            </HeaderSectionRight>
        </StyledHeader>
    );

}

export default Header;
