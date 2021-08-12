
import { useYoutubeSearch } from "../../customHooks/useYoutubeSearch/useYoutubeSearch";
import { useYoutubeVideo } from '../../customHooks/useYoutubeVideo/useYoutubeVideo'
import Home from "../../views/Home";
import VideoDetails from "../../views/VideDetails";
import Header from "../Header";
import globalReducer from "../../state/reducer";
import { useReducer } from "react";
import GlobalContext from "../../state/context";
import { themes } from "../../state/themes";

function App() {
    const {
        searchResult,
        searchIsLoading,
        searchError,
        setSearchTerm
    } = useYoutubeSearch();

    const {
        videoData,
        videoIsLoading,
        videoError,
        videoId,
        setVideoId
    } = useYoutubeVideo();

    const [globalState, globalDispatch] = useReducer(globalReducer, { theme: themes.light });

    return (
        <GlobalContext.Provider value={{
            globalState,
            globalDispatch,
            youtubeSearch: {
                searchResult,
                searchIsLoading,
                searchError,
                setSearchTerm
            },
            youtubeVideo: {
                videoData,
                videoIsLoading,
                videoError,
                videoId,
                setVideoId
            }
        }}>
            <Header />
            <main>
                {videoId == null ? (
                    <Home />
                ) : (
                    <VideoDetails />
                )}
            </main>

        </GlobalContext.Provider>
    );
}

export default App;
