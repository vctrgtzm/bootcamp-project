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
    MenuIconContainer,
    SearchButton
} from './Header.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../logo.png';
import { useContext, useState } from 'react';
import GlobalContext from '../../state/context';

function Header() {
    const [searchVal, setSearchVal] = useState('');
    const { youtubeSearch, youtubeVideo } = useContext(GlobalContext);
    const { setSearchTerm } = youtubeSearch;
    const { setVideoId } = youtubeVideo;

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
