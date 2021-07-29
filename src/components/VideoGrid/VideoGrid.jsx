import VideoCard from "../VideoCard";
import { GridContainer } from "./VideoGrid.styled";


function VideoGrid({ items }) {
    return (
    <GridContainer>
        {items.map(item => {
            return (
                <VideoCard                  
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
