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
import { useState } from 'react';

function Header({ setSearchTerm, setVideoId }) {
    const [searchVal, setSearchVal] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setVideoId(null);
            setSearchTerm(e.target.value);            
        }
    }

    return (
        <StyledHeader role="banner" data-testid="header">
            <HeaderSectionLeft>
                <Logo role="img" alt="the icon of the app" src={logo}></Logo>
                <NavigationItems role="navigation" className="hidden-mobile">
                    <NavigationItem>Home</NavigationItem>
                    <NavigationItem>Favorites</NavigationItem>
                </NavigationItems>
                <MenuIconContainer className="display-block-mobile">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </MenuIconContainer>
            </HeaderSectionLeft>
            <HeaderSectionCenter>
                <SearchInput
                    role="search"
                    type="text"
                    placeholder="Search..."
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </HeaderSectionCenter>
            <HeaderSectionRight className="hidden-mobile">
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
