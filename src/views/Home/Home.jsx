import VideoGrid from '../../components/VideoGrid/VideoGrid';
import { LoadingIndicator, ErrorContainer } from '../../components/App/App.styled';
import { useContext } from 'react';
import GlobalContext from '../../state/context';

function Home() {
    const {
        youtubeSearch: {
            searchIsLoading,
            searchError
        }
    } = useContext(GlobalContext);

    if (searchIsLoading) {
        return <LoadingIndicator role="progressbar" />
    }

    if (searchError) {
        return (
            <ErrorContainer>
                <h1>Something went wrong when fetching data from youtube API :(</h1>
            </ErrorContainer>
        );
    }

    return (
        <VideoGrid />
    );
}

export default Home;
