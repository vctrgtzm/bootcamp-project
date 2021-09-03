import { useLocation, useParams } from "react-router-dom";
import { ErrorContainer, LoadingIndicator } from "../../components/App/App.styled";
import RelatedVideos from "../../components/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer";
import { useYoutubeRelatedVideos } from "../../customHooks/useYoutubeRelatedVideos/useYoutubeRelatedVideos";
import { VideoDetailsViewContainer } from "./VideoDetails.styled";
import { useYoutubeVideo } from '../../customHooks/useYoutubeVideo/useYoutubeVideo'
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";

function VideoDetails() {
    const { id } = useParams();
    const location = useLocation();
    const { watchingItem } = location.state;
    const {
        videoData,
        videoIsLoading,
        videoError
    } = useYoutubeVideo(id);
    const videoItem = videoData?.items[0];
    const {
        relatedVideosResult,
        relatedVideosIsLoading,
        relatedVideosError,
    } = useYoutubeRelatedVideos(videoItem?.id, 15);

    useEffect(() => {
        ReactTooltip.rebuild();
    });

    if (videoIsLoading || relatedVideosIsLoading) {
        return <LoadingIndicator role="progressbar" />
    }

    if (videoError || relatedVideosError) {
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
                items={relatedVideosResult.items}
            />
        </VideoDetailsViewContainer>
    );
}

export default VideoDetails;
