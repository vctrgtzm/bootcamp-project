import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useYoutubeChannel } from "../../customHooks/useYoutubeChannel/useYoutubeChannel";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import { IFameContainer, TitleAndFavButton, VideoContainer, VideoDetailsContainer } from './VideoPlayer.styled';



const VideoPlayer = ({ videoData }) => {
    const videoItem = videoData?.items[0];
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(videoItem?.snippet?.channelId);

    return (
        <VideoDetailsContainer>
            <VideoContainer>
                <IFameContainer dangerouslySetInnerHTML={{ __html: videoItem?.player?.embedHtml }} />
            </VideoContainer>

            <TitleAndFavButton>
                <h2>{videoItem?.snippet?.title}</h2>
                <FontAwesomeIcon
                    icon={faHeart} size="lg"
                    data-tip="Add to favorites"
                    className="full-opacity-mobile"
                />
            </TitleAndFavButton>
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
            <p className="hidden-mobile">{videoItem?.snippet?.description}</p>
        </VideoDetailsContainer>
    );

}

export default VideoPlayer;
