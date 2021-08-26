import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useYoutubeChannel } from "../../customHooks/useYoutubeChannel/useYoutubeChannel";
import GlobalContext from "../../state/context";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import { BackToVideosButton, IFameContainer, VideoContainer, VideoDetailsContainer } from './VideoPlayer.styled';



const VideoPlayer = () => {
    const {
        youtubeVideo: {
            videoData,
            setVideoId
        }
    } = useContext(GlobalContext);
    const videoItem = videoData?.items[0];
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(videoItem?.snippet?.channelId);

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
            {!channelIsLoading && !channelError && (
                <ChannelInfo
                    thumbnail={
                        channelResult?.items[0]?.snippet?.thumbnails?.default?.url ??
                        channelResult?.items[0]?.snippet?.thumbnails?.medium?.url ??
                        channelResult?.items[0]?.snippet?.thumbnails?.high?.url
                    }
                    thumbnailSize="50px"
                    title={channelResult?.items[0]?.snippet?.title}
                    style={{ marginLeft: '0px' }}
                />
            )}
            <p className="hidden-mobile">{videoItem.snippet.description}</p>
        </VideoDetailsContainer>
    );

}

export default VideoPlayer;
