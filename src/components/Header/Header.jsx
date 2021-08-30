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
    SearchButton,
    LogoutButton
} from './Header.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../logo.png';
import React, { useContext, useState } from 'react';
import GlobalContext from '../../state/context';
import actionTypes from '../../state/actionTypes';
import ReactTooltip from 'react-tooltip';
import { themes } from '../../state/themes';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    const [searchVal, setSearchVal] = useState('');
    const [showLogout, setShowLogout] = useState(false);
    const history = useHistory();
    const {
        youtubeSearch: { setSearchTerm },
        globalDispatch,
        globalState,
        setShowLoginModal
    } = useContext(GlobalContext);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setSearchTerm(e.target.value);
            history.push("/");
        }
    }

    const handleSearchButtonClick = () => {
        if (searchVal.length > 0) {
            setSearchTerm(searchVal);
            history.push("/");
        }
    }

    const handleToggleMouseClick = () => {
        globalDispatch({ type: actionTypes.TOGGLE_THEME });
        ReactTooltip.hide();
    }

    const handleAvatarClick = () => {
        if (globalState.user) {
            setShowLogout(prevState => !prevState);
        } else {
            setShowLoginModal(true);
        }
    }

    const handleLogOut = () => {
        setShowLogout(prevState => !prevState);
        globalDispatch({ type: actionTypes.USER_LOGOUT });
        localStorage.removeItem('user');
    }

    return (
        <>
            <StyledHeader role="banner" data-testid="header">
                <HeaderSectionLeft>
                    <Link to="/">
                        <Logo role="img" alt="the icon of the app" src={logo} />
                    </Link>
                    <NavigationItems role="navigation" className="hidden-mobile">
                        <NavigationItem to="/" >Home</NavigationItem>
                        {globalState.user && <NavigationItem to="/favorites" >Favorites</NavigationItem>}
                    </NavigationItems>
                    <MenuIconContainer className="display-block-mobile">
                        <FontAwesomeIcon icon={faBars} size="1x" />
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
                    <div
                        role="switch"
                        aria-checked="false"
                        onClick={handleToggleMouseClick}
                        data-tip={`Switch to ${globalState.theme === themes.dark ? 'light' : 'dark'} theme`}
                    >
                        <ThemeToggle
                            icon={faAdjust}
                            size="sm"
                        />
                    </div>
                    <AvatarContainer
                        role="figure"
                        onClick={handleAvatarClick}
                        avatarUrl={globalState?.user?.avatarUrl}
                    >
                        {!globalState?.user?.avatarUrl && <FontAwesomeIcon icon={faUser} size="sm" />}

                    </AvatarContainer>
                </HeaderSectionRight>
                {showLogout && <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>}
            </StyledHeader>
        </>
    );

}

export default Header;
