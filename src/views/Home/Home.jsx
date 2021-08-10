import VideoGrid from '../../components/VideoGrid/VideoGrid';
import { LoadingIndicator, ErrorContainer } from '../../components/App/App.styled';


function Home({ searchIsLoading, searchResult, searchError, setVideoId }) {

    if (searchIsLoading) {
        return <LoadingIndicator role="progressbar"/>
    }

    if (searchError) {
        return (
            <ErrorContainer>
                <h1>Something went wrong when fetching data from youtube API :(</h1>
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

export default Home;
