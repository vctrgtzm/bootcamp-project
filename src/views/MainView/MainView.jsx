import VideoGrid from '../../components/VideoGrid/VideoGrid';
import { LoadingIndicator, ErrorContainer } from '../../components/App/App.styled';


function MainView({ searchIsLoading, searchResult, searchError, setVideoId }) {

    if (searchIsLoading) {
        return <LoadingIndicator />
    }

    if (searchError) {
        return (
            <ErrorContainer>
                <h1>Something went wrong when fetching data from youtube API :(</h1>
                <p>{searchError}</p>
            </ErrorContainer>
        );
    }

    return (
        <div role="main">
            <VideoGrid
                items={searchResult.items}
                setVideoId={setVideoId}
            />
        </div>
    );
}

export default MainView;
