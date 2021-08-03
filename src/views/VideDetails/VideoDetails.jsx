import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorContainer } from "../../components/App/App.styled";
import { LoadingIndicator } from "../../components/App/App.styled";
import { useYoutubeRelatedVideos } from "../../customHooks/useYoutube";
import { BackToVideosButton, VideoDetailsViewContainer, VideoDetailsContainer, RelatedVideosContainer, RelatedVideoContainer, ThumbnailContainer, IFameContainer, VideoContainer } from "./VideoDetails.styled";


function VideoDetails({ videoData, videoIsLoading, videoError, setVideoId }) {
    const videoItem = videoData?.items[0];
    const {
        relatedVideosResult,
        relatedVideosIsLoading,
        relatedVideosError,
    } = useYoutubeRelatedVideos(videoItem?.id, 15);

    if (videoIsLoading || relatedVideosIsLoading) {
        return <LoadingIndicator />
    }

    if (videoError || relatedVideosError) {
        return (
            <ErrorContainer>
                <h1>Something went wrong when fetching data from youtube API :(</h1>
                <p>{videoError || relatedVideosError}</p>
            </ErrorContainer>
        );
    }

    return (
        <VideoDetailsViewContainer>
            <VideoDetailsContainer>
                <VideoContainer>
                    <BackToVideosButton onClick={() => setVideoId(null)}>
                        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                        &nbsp;Back to videos
                    </BackToVideosButton>
                    <IFameContainer dangerouslySetInnerHTML={{ __html: videoItem.player.embedHtml }} />
                </VideoContainer>
                <h2>{videoItem.snippet.title}</h2>
                <p className="hidden-mobile">{videoItem.snippet.description}</p>
            </VideoDetailsContainer>
            <RelatedVideosContainer>
                {relatedVideosResult.items.filter(item => item.snippet !== undefined).map(item => { //filter results without snippet
                    return (
                        <RelatedVideoContainer onClick={() => setVideoId(item.id.videoId)} key={item.id.videoId}>
                            <ThumbnailContainer thumbnail={item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url} />
                            <span>{item.snippet.title}</span>
                        </RelatedVideoContainer>
                    );
                })}
            </RelatedVideosContainer>
        </VideoDetailsViewContainer>
    );
}

export default VideoDetails;
