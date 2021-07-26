import VideoCard from "../VideoCard";
import { GridContainer } from "./VideoGrid.styled";


function VideoGrid({ items }) {
    return (
    <GridContainer data-testid="grid-container">
        {items.map(item => {
            return (
                <VideoCard
                    data-testid="video-card"
                    key={item.etag}
                    thumbnail={item.snippet.thumbnails.high.url}
                    title={item.snippet.title}
                    description={item.snippet.description}
                />
            );
        })}
    </GridContainer>);
}

export default VideoGrid;