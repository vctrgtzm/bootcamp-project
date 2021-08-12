import { useContext } from "react";
import { ErrorContainer, LoadingIndicator } from "../../components/App/App.styled";
import RelatedVideos from "../../components/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer";
import { useYoutubeRelatedVideos } from "../../customHooks/useYoutubeRelatedVideos/useYoutubeRelatedVideos";
import GlobalContext from "../../state/context";
import { VideoDetailsViewContainer } from "./VideoDetails.styled";


function VideoDetails() {
    const { youtubeVideo } = useContext(GlobalContext);
    const { videoData, videoIsLoading, videoError } = youtubeVideo;

    const videoItem = videoData?.items[0];
    const {
        relatedVideosResult,
        relatedVideosIsLoading,
        relatedVideosError,
    } = useYoutubeRelatedVideos(videoItem?.id, 15);

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
            <VideoPlayer />
            <RelatedVideos
                relatedVideosResult={relatedVideosResult}
            />
        </VideoDetailsViewContainer>
    );
}

export default VideoDetails;
