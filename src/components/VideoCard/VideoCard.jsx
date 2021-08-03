import { VideoItemContainer, ThumbnailContainer, VideoRelativeContiner, DescriptionContainer, LoadingIndicator } from './VideoCard.styled';


function VideoCard({ thumbnail, title, description, videoId, setVideoId }) {

    return (
        <VideoRelativeContiner>
            <VideoItemContainer role="listitem" onClick={() => setVideoId(videoId)}>
                <ThumbnailContainer
                    thumbnail={thumbnail}
                />
                <LoadingIndicator />
                <h2>{title}</h2>
                <DescriptionContainer className="display-block-mobile">
                    <p>{description}</p>
                </DescriptionContainer>
            </VideoItemContainer>
        </VideoRelativeContiner>
    );

}

export default VideoCard;
