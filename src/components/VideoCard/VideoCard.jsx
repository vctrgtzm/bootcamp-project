import { VideoItemContainer, ThumbnailContainer, VideoRelativeContiner, DescriptionContainer, LoadingIndicator } from './VideoCard.styled';
import { useYoutubeChannel } from '../../customHooks/useYoutubeChannel/useYoutubeChannel'
import ChannelInfo from '../ChannelInfo/ChannelInfo';

function VideoCard({ thumbnail, title, description, videoId, setVideoId, channelId }) {
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(channelId);

    return (
        <VideoRelativeContiner>
            <VideoItemContainer role="listitem" onClick={() => setVideoId(videoId)}>
                <ThumbnailContainer
                    thumbnail={thumbnail}
                />
                <LoadingIndicator />
                <h2>{title}</h2>
                {channelIsLoading || channelError ? undefined : (
                    <ChannelInfo
                        thumbnail={
                            channelResult?.items[0]?.snippet?.thumbnails?.default?.url ??
                            channelResult?.items[0]?.snippet?.thumbnails?.medium?.url ??
                            channelResult?.items[0]?.snippet?.thumbnails?.high?.url
                        }
                        title={channelResult?.items[0]?.snippet?.title}
                    />
                )}
                <DescriptionContainer className="display-block-mobile">
                    <p>{description}</p>
                </DescriptionContainer>
            </VideoItemContainer>
        </VideoRelativeContiner>
    );

}

export default VideoCard;
