import { RelatedVideoContainer, RelatedVideosContainer, ThumbnailContainer } from "./RelatedVideos.styled";

const RelatedVideos = ({ relatedVideosResult, setVideoId }) => {

    return (
        <RelatedVideosContainer>
            {relatedVideosResult.items.filter(item => item.snippet !== undefined).map(item => { //filter results without snippet
                return (
                    <RelatedVideoContainer
                        role="listitem"
                        onClick={() => setVideoId(item.id.videoId)}
                        key={item.id.videoId}
                    >
                        <ThumbnailContainer thumbnail={item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url} />
                        <span>{item.snippet.title}</span>
                    </RelatedVideoContainer>
                );
            })}
        </RelatedVideosContainer>
    );
}

export default RelatedVideos;
