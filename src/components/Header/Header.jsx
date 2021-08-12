import {
    StyledHeader,
    Logo,
    HeaderSectionLeft,
    HeaderSectionCenter,
    HeaderSectionRight,
    SearchInput,
    AvatarContainer,
    ThemeToggle,
    NavigationItems,
    NavigationItem,
    MenuIconContainer,
    SearchButton
} from './Header.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../logo.png';
import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import GlobalContext from '../../state/context';
import actionTypes from '../../state/actionTypes';

function Header() {
    const [searchVal, setSearchVal] = useState('');
    const { youtubeSearch, youtubeVideo, globalDispatch } = useContext(GlobalContext);
    const { setSearchTerm } = youtubeSearch;
    const { setVideoId } = youtubeVideo;
    const themeToggleRef = useRef();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setVideoId(null);
            setSearchTerm(e.target.value);
        }
    }

    const handleSearchButtonClick = () => {
        if (searchVal.length > 0) {
            setVideoId(null);
            setSearchTerm(searchVal);
        }
    }

    const handleToggleMouseLeave = useCallback(() => {
        globalDispatch({ type: actionTypes.SET_THEME });
    }, [globalDispatch]);

    const handleToggleMouseEnter = useCallback(() => {
        themeToggleRef.current.addEventListener('mouseleave', handleToggleMouseLeave);
        globalDispatch({ type: actionTypes.SET_THEME });
    }, [globalDispatch, handleToggleMouseLeave]);

    const handleToggleMouseClick = () => {
        themeToggleRef.current.removeEventListener('mouseleave', handleToggleMouseLeave);
    }

    useEffect(() => {
        const current = themeToggleRef.current;
        current.addEventListener('mouseenter', handleToggleMouseEnter);
        current.addEventListener('mouseleave', handleToggleMouseLeave);

        return () => {
            current.removeEventListener('mouseenter', handleToggleMouseEnter);
            current.removeEventListener('mouseleave', handleToggleMouseLeave);
        }
    }, [handleToggleMouseEnter, handleToggleMouseLeave]);

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
            <HeaderSectionCenter role="search">
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <SearchButton title="Search" onClick={handleSearchButtonClick}>
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                </SearchButton>
            </HeaderSectionCenter>
            <HeaderSectionRight className="hidden-mobile">
                <div role="switch" aria-checked="false" ref={themeToggleRef}>
                    <ThemeToggle
                        icon={faAdjust}
                        size="sm"
                        onClick={handleToggleMouseClick}
                    />
                </div>
                <AvatarContainer role="figure">
                    <FontAwesomeIcon icon={faUser} size="sm" />
                </AvatarContainer>
            </HeaderSectionRight>
        </StyledHeader>
    );

}

export default Header;
