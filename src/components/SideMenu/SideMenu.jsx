import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import actionTypes from "../../state/actionTypes";
import GlobalContext from "../../state/context";
import { themes } from "../../state/themes";
import { CloseSideMenuButton, Menu, MenuOption } from "./SideMenu.styled";

function SideMenu({ showSideMenu }) {

    const {
        setShowSideMenu,
        globalDispatch,
        globalState: { user, theme },
        setShowLoginModal
    } = useContext(GlobalContext);

    const handleToogleThemeClick = (e) => {
        e.preventDefault();
        globalDispatch({ type: actionTypes.TOGGLE_THEME });
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        setShowLoginModal(true);
    }

    const handleLogoutClick = (e) => {
        e.preventDefault();
        setShowSideMenu(false);
        globalDispatch({ type: actionTypes.USER_LOGOUT });
    }

    return (
        <Menu style={{ display: showSideMenu ? 'block' : 'none' }}>
            <CloseSideMenuButton
                size="1x"
                icon={faTimes}
                onClick={() => setShowSideMenu(false)}
            />
            <MenuOption
                to="/"
                onClick={() => setShowSideMenu(false)}>
                Home
            </MenuOption>
            {user &&
                <MenuOption
                    to="/favorites"
                    onClick={() => setShowSideMenu(false)}
                >
                    Favorites
                </MenuOption>}
            <MenuOption
                to="#"
                onClick={handleToogleThemeClick}
            >
                {`Switch to ${theme === themes.dark ? 'light' : 'dark'} theme`}
            </MenuOption>
            {user ? (
                <MenuOption
                    to="#"
                    onClick={handleLogoutClick}>
                    Logout
                </MenuOption>
            ) : (
                <MenuOption
                    to="#"
                    onClick={handleLoginClick}>
                    Login
                </MenuOption>
            )}
        </Menu>
    );
}

export default SideMenu;
