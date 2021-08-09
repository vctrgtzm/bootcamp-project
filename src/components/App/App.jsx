
import { useYoutubeSearch, useYoutubeVideo } from "../../customHooks/useYoutube";
import Home from "../../views/Home";
import VideoDetails from "../../views/VideDetails";
import Header from "../Header";

function App() {
    const {
        searchResult,
        searchIsLoading,
        searchError,
        setSearchTerm
    } = useYoutubeSearch('wizeline', 50); //default search term 'wizeline' with default max result 50

    const {
        videoData,
        videoIsLoading,
        videoError,
        videoId,
        setVideoId
    } = useYoutubeVideo();

    return (
        <>
            <Header
                setSearchTerm={setSearchTerm}
                setVideoId={setVideoId}
            />
            <main>
                {videoId == null ? (
                    <Home
                        searchIsLoading={searchIsLoading}
                        searchResult={searchResult}
                        searchError={searchError}
                        setVideoId={setVideoId}
                    />
                ) : (
                    <VideoDetails
                        videoData={videoData}
                        videoIsLoading={videoIsLoading}
                        videoError={videoError}
                        setVideoId={setVideoId}
                    />
                )}
            </main>

        </>
    );
}

export default App;
