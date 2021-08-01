import { VideoItemContainer, ThumbnailContiner, VideoRelativeContiner, DescriptionContainer, LoadingIndicator } from './VideoCard.styled';


function VideoCard({ thumbnail, title, description }) {

    return (
        <VideoRelativeContiner>
            <VideoItemContainer role="listitem">
                <ThumbnailContiner
                    thumbnail={thumbnail}
                />
                <LoadingIndicator/>
                <h2>{title}</h2>
                <DescriptionContainer className="display-block-mobile">
                    <p>{description}</p>
                </DescriptionContainer>
            </VideoItemContainer>
        </VideoRelativeContiner>
    );

}

export default VideoCard;
