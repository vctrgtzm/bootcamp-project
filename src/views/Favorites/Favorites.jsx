import { useContext } from "react";
import { ErrorContainer } from "../../components/App/App.styled";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import GlobalContext from "../../state/context";

function Favorites() {
    const { globalState: { user: { favoriteVideos } } } = useContext(GlobalContext);

    return (
        favoriteVideos.length > 0 ? (
            <VideoGrid items={favoriteVideos} />
        ) : (
            <ErrorContainer>
                <h1>You don't have any favorite videos yet :(</h1>
            </ErrorContainer>
        )
    );
}

export default Favorites;
