import RelatedVideo from "./RelatedVideo";
import { RelatedVideosContainer } from "./RelatedVideos.styled";

const RelatedVideos = ({ items, fromFavorites=false }) => {

    return (
        <RelatedVideosContainer>
            {items.length > 0 ? (
                items.filter(item => item.snippet !== undefined).map(item => { //filter results without snippet
                return (
                    <RelatedVideo
                        key={item.id.videoId}
                        item={item}
                        fromFavorites={fromFavorites}
                    />
                );
            })
            ) : (
                <p>{`${fromFavorites ? 'Looks like there are no more favorite videos to show :(' : 'There are not related videos to show :('}`}</p>
            )}
        </RelatedVideosContainer>
    );
}

export default RelatedVideos;
