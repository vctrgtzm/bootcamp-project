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
                <p>{searchError.response?.data?.error?.message ?? searchError.message}</p>
            </ErrorContainer>
        );
    }

    return (
        <VideoGrid
            items={searchResult.items}
            setVideoId={setVideoId}
        />
    );
}

export default MainView;
