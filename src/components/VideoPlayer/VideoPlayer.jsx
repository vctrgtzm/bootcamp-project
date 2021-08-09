import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackToVideosButton, IFameContainer, VideoContainer, VideoDetailsContainer } from './VideoPlayer.styled';



const VideoPlayer = ({ videoData, setVideoId }) => {
    const videoItem = videoData?.items[0];

    return (
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
    );

}

export default VideoPlayer;
