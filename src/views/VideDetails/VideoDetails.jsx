import { ErrorContainer, LoadingIndicator } from "../../components/App/App.styled";
import RelatedVideos from "../../components/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer";
import { useYoutubeRelatedVideos } from "../../customHooks/useYoutubeRelatedVideos/useYoutubeRelatedVideos";
import { VideoDetailsViewContainer } from "./VideoDetails.styled";


function VideoDetails({ videoData, videoIsLoading, videoError, setVideoId }) {
    const videoItem = videoData?.items[0];
    const {
        relatedVideosResult,
        relatedVideosIsLoading,
        relatedVideosError,
    } = useYoutubeRelatedVideos(videoItem?.id, 15);

    if(videoIsLoading || relatedVideosIsLoading){
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
            <VideoPlayer
                videoData={videoData}
                videoIsLoading={videoIsLoading}
                videoError={videoError}
                setVideoId={setVideoId}
            />
            <RelatedVideos
                relatedVideosResult={relatedVideosResult}
                relatedVideosIsLoading={relatedVideosIsLoading}
                relatedVideosError={relatedVideosError}
                setVideoId={setVideoId}
            />
        </VideoDetailsViewContainer>
    );
}

export default VideoDetails;
