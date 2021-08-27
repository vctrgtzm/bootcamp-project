import { useYoutubeChannel } from "../../customHooks/useYoutubeChannel/useYoutubeChannel";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import { IFameContainer, VideoContainer, VideoDetailsContainer } from './VideoPlayer.styled';



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
            <h2>{videoItem?.snippet?.title}</h2>
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
