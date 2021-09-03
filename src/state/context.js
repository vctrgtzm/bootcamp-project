import { createContext } from "react";

const GlobalContext = createContext({
    globalState: {},
    globalDispatch: () => {},
    youtubeSearch: {
        searchResult: {},
        searchIsLoading: false,
        searchError: null,
        setSearchTerm: () => {}
    },
    youtubeVideo: {
        videoData: {},
        videoIsLoading: false,
        videoError: null,
        videoId: null,
        setVideoId: () => {}
    },
    setShowLoginModal: () => {},
    pendingFav: null,
    watchingItem: null,
    setShowSideMenu: () => {}
});

export default GlobalContext;
