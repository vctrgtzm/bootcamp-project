import { VideoItemContainer, ThumbnailContainer, VideoRelativeContiner, DescriptionContainer, LoadingIndicator, FavButton } from './VideoCard.styled';
import { useYoutubeChannel } from '../../customHooks/useYoutubeChannel/useYoutubeChannel'
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

function VideoCard({ thumbnail, title, description, videoId, channelId }) {
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(channelId);

    return (
        <VideoRelativeContiner>
            <VideoItemContainer to={`/video/${videoId}`} role="listitem">
                <ThumbnailContainer thumbnail={thumbnail}>
                    <ReactTooltip
                        place="left"
                        className="custom-tooltip"
                    />
                    <FavButton
                        icon={faHeart}
                        size="2x"
                        data-tip="Add to favorites"
                    />
                </ThumbnailContainer>
                    <LoadingIndicator />
                    <h2>{title}</h2>
                    {!channelIsLoading && !channelError && (
                        <ChannelInfo
                            thumbnail={
                                channelResult?.items[0]?.snippet?.thumbnails?.default?.url ??
                                channelResult?.items[0]?.snippet?.thumbnails?.medium?.url ??
                                channelResult?.items[0]?.snippet?.thumbnails?.high?.url
                            }
                            title={channelResult?.items[0]?.snippet?.title}
                        />
                    )}
                    <DescriptionContainer className="display-block-mobile description-container">
                        <p>{description}</p>
                    </DescriptionContainer>
            </VideoItemContainer>
        </VideoRelativeContiner>
            );

}

            export default VideoCard;
