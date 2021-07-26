import {
    StyledHeader,
    Logo,
    NavList,
    HeaderSectionLeft,
    HeaderSectionCenter,
    HeaderSectionRight,
    SearchInput,
    AvatarContainer,
    ThemeToggleContainer
} from './Header.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faUser } from '@fortawesome/free-solid-svg-icons'

import logo from '../../logo.png';

function Header() {
    return (
        <StyledHeader data-testid="header">
            <HeaderSectionLeft>
                <Logo data-testid="hd-logo" alt="the icon of the app" src={logo}></Logo>
                <nav data-testid="hd-nav-var">
                    <NavList>
                        <li>Home</li>
                        <li>Favorites</li>
                    </NavList>
                </nav>
            </HeaderSectionLeft>
            <HeaderSectionCenter>
                <SearchInput data-testid="hd-search-input" type="text" placeholder="Search..." />
            </HeaderSectionCenter>
            <HeaderSectionRight>
                <ThemeToggleContainer>
                    <FontAwesomeIcon icon={faAdjust} size="sm" />
                </ThemeToggleContainer>
                <AvatarContainer data-testid="hd-avatar">
                    <FontAwesomeIcon icon={faUser} size="sm" />
                </AvatarContainer>
            </HeaderSectionRight>
        </StyledHeader>
    );

}

export default Header;