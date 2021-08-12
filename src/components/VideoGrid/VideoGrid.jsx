import { useContext } from "react";
import GlobalContext from "../../state/context";
import VideoCard from "../VideoCard";
import { GridContainer } from "./VideoGrid.styled";


function VideoGrid() {
    const { youtubeSearch, youtubeVideo } = useContext(GlobalContext);
    const { items } = youtubeSearch.searchResult;
    const { setVideoId } = youtubeVideo;

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
                        setVideoId={setVideoId}
                    />
                );
            })}
        </GridContainer>);
}

export default VideoGrid;
