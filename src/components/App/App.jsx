import { useYoutubeSearch } from "../../customHooks/useYoutubeSearch/useYoutubeSearch";
import Home from "../../views/Home";
import VideoDetails from "../../views/VideDetails";
import Header from "../Header";
import globalReducer from "../../state/reducer";
import { useEffect, useReducer, useState } from "react";
import GlobalContext from "../../state/context";
import { themes } from "../../state/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../globalStyle';
import { Route, Switch } from "react-router-dom";
import LoginModal from '../LoginModal';
import ReactTooltip from "react-tooltip";
import actionTypes from "../../state/actionTypes";

function App() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const {
        searchResult,
        searchIsLoading,
        searchError,
        setSearchTerm
    } = useYoutubeSearch();

    const [globalState, globalDispatch] = useReducer(globalReducer, { theme: themes.dark });

    const globalContextValue = {
        globalState,
        globalDispatch,
        youtubeSearch: {
            searchResult,
            searchIsLoading,
            searchError,
            setSearchTerm
        },
        setShowLoginModal
    };

    useEffect(() => {
        //check if there's a session in local storage
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && !globalState.user) {
            globalDispatch({ type: actionTypes.USER_LOGIN, payload: user });
        }
    }, [globalState]);

    return (
        <GlobalContext.Provider value={globalContextValue}>
            <ThemeProvider theme={globalState.theme}>
                <GlobalStyle />
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/video/:id">
                            <VideoDetails />
                        </Route>
                    </Switch>
                </main>
                <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
                <ReactTooltip
                    place="left"
                    effect="solid"
                    className="custom-tooltip"
                />
            </ThemeProvider>
        </GlobalContext.Provider>
    );
}

export default App;
