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
import React, { useContext, useState } from 'react';
import GlobalContext from '../../state/context';
import actionTypes from '../../state/actionTypes';
import ReactTooltip from 'react-tooltip';
import { themes } from '../../state/themes';
import { useHistory } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';

function Header() {
    const [searchVal, setSearchVal] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const history = useHistory();
    const {
        youtubeSearch: { setSearchTerm },
        globalDispatch,
        globalState
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

    return (
        <>
            <StyledHeader role="banner" data-testid="header">
                <HeaderSectionLeft>
                    <Logo role="img" alt="the icon of the app" src={logo} />
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
                    <div
                        role="switch"
                        aria-checked="false"
                        onClick={handleToggleMouseClick}
                        data-tip={`Switch to ${globalState.theme === themes.dark ? 'light' : 'dark'} theme`}
                    >
                        <ReactTooltip
                            place="bottom"
                            className="custom-tooltip"
                        />
                        <ThemeToggle
                            icon={faAdjust}
                            size="sm"
                        />
                    </div>
                    <AvatarContainer role="figure" onClick={() => setShowLoginModal(true)}>
                        <FontAwesomeIcon icon={faUser} size="sm" />
                    </AvatarContainer>
                </HeaderSectionRight>
            </StyledHeader>
            <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
        </>
    );

}

export default Header;
