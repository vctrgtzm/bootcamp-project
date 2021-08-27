import RelatedVideo from "./RelatedVideo";
import { RelatedVideosContainer } from "./RelatedVideos.styled";

const RelatedVideos = ({ relatedVideosResult }) => {    

    return (
        <RelatedVideosContainer>
            {relatedVideosResult.items.filter(item => item.snippet !== undefined).map(item => { //filter results without snippet
                return (
                    <RelatedVideo
                        key={item.id.videoId}
                        item={item}
                    />
                );
            })}
        </RelatedVideosContainer>
    );
}

export default RelatedVideos;
