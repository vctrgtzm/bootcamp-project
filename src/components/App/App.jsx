import { useYoutubeSearch } from "../../customHooks/useYoutubeSearch/useYoutubeSearch";
import Home from "../../views/Home";
import VideoDetails from "../../views/VideDetails";
import Header from "../Header";
import globalReducer from "../../state/reducer";
import { useReducer } from "react";
import GlobalContext from "../../state/context";
import { themes } from "../../state/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../globalStyle';
import { Route, Switch } from "react-router-dom";

function App() {
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
        }
    };

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
            </ThemeProvider>
        </GlobalContext.Provider>
    );
}

export default App;
