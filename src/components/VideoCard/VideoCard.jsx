import { VideoItemContainer, ThumbnailContiner } from './VideoCard.styled';


function VideoCard({ thumbnail, title, description }) {

    return (
        <VideoItemContainer>
            <ThumbnailContiner
                thumbnail={thumbnail}
            />
            <h2>{title}</h2>
            <p>{description}</p>
        </VideoItemContainer>
    );

}

export default VideoCard;