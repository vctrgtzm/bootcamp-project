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
        <StyledHeader data-testid="header">
            <HeaderSectionLeft>
                <Logo data-testid="hd-logo" alt="the icon of the app" src={logo}></Logo>
                <NavigationItems>
                    <NavigationItem>Home</NavigationItem>
                    <NavigationItem>Favorites</NavigationItem>
                </NavigationItems>
                <MenuIconContainer>
                    <FontAwesomeIcon icon={faBars} size="md" />
                </MenuIconContainer>
            </HeaderSectionLeft>
            <HeaderSectionCenter>
                <SearchInput data-testid="hd-search-input" type="text" placeholder="Search..." />
            </HeaderSectionCenter>
            <HeaderSectionRight>
                <ThemeToggleContainer>
                    <FontAwesomeIcon data-testid="hd-theme-toggle " icon={faAdjust} size="sm" />
                </ThemeToggleContainer>
                <AvatarContainer data-testid="hd-avatar">
                    <FontAwesomeIcon icon={faUser} size="sm" />
                </AvatarContainer>
            </HeaderSectionRight>
        </StyledHeader>
    );

}

export default Header;