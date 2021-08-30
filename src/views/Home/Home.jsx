import VideoGrid from '../../components/VideoGrid/VideoGrid';
import { LoadingIndicator, ErrorContainer } from '../../components/App/App.styled';
import { useContext, useEffect } from 'react';
import GlobalContext from '../../state/context';
import ReactTooltip from 'react-tooltip';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    let { showLogin } = location.state ?? false;
    const {
        youtubeSearch: {
            searchIsLoading,
            searchError,
            searchResult
        },
        setShowLoginModal
    } = useContext(GlobalContext);

    useEffect(() => {
        if (showLogin) {
            setShowLoginModal(true);
        }
    }, [setShowLoginModal, showLogin]);

    useEffect(() => {
        ReactTooltip.rebuild();
    });

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
        <VideoGrid items={searchResult.items} />
    );
}

export default Home;
