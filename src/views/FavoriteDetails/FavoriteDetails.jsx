import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { ErrorContainer, LoadingIndicator } from "../../components/App/App.styled";
import RelatedVideos from "../../components/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer";
import { useYoutubeVideo } from "../../customHooks/useYoutubeVideo/useYoutubeVideo";
import GlobalContext from "../../state/context";
import { VideoDetailsViewContainer } from "../VideoDetails/VideoDetails.styled";

function FavoriteDetails() {
    const { globalState: { user: { favoriteVideos } } } = useContext(GlobalContext);
    const { id } = useParams();
    const location = useLocation();
    const { watchingItem } = location.state;
    const {
        videoData,
        videoIsLoading,
        videoError
    } = useYoutubeVideo(id);

    useEffect(() => {
        ReactTooltip.rebuild();
    });

    if (videoIsLoading) {
        return <LoadingIndicator role="progressbar" />
    }

    if (videoError) {
        return (
            <ErrorContainer>
                <h1>Something went wrong when fetching data from youtube API :(</h1>
            </ErrorContainer>
        );
    }

    return (
        <VideoDetailsViewContainer>
            <VideoPlayer item={videoData?.items[0]} watchingItem={watchingItem} />
            <RelatedVideos
                items={favoriteVideos.filter(x => x.id.videoId !== id)}
                fromFavorites={true}
            />
        </VideoDetailsViewContainer>
    );
}

export default FavoriteDetails;
