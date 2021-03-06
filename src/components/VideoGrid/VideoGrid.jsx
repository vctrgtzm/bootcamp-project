import VideoCard from "../VideoCard";
import { GridContainer } from "./VideoGrid.styled";


function VideoGrid({ items, fromFavorites=false }) {

    return (
        <GridContainer>
            {items.filter(item => item.snippet !== undefined).map(item => { //filter results without snippet
                return (
                    <VideoCard
                        key={item.etag}
                        thumbnail={item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url}
                        title={item.snippet.title}
                        description={item.snippet.description}
                        videoId={item.id.videoId}
                        channelId={item.snippet.channelId}
                        item={item}
                        fromFavorites={fromFavorites}
                    />
                );
            })}
        </GridContainer>);
}

export default VideoGrid;
