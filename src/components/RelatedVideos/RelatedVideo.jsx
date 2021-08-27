import { useYoutubeChannel } from "../../customHooks/useYoutubeChannel/useYoutubeChannel";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import { RelatedVideoContainer, ThumbnailContainer, TitleAndChannelContainer } from "./RelatedVideo.styled";

const RelatedVideo = ({ item }) => {
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(item.snippet.channelId);

    return (
        <RelatedVideoContainer
            to={`/video/${item.id.videoId}`}
            role="listitem"
        >
            <ThumbnailContainer
                thumbnail={
                    item.snippet.thumbnails?.high?.url ||
                    item.snippet.thumbnails?.medium?.url ||
                    item.snippet.thumbnails?.default?.url
                }
            />
            <TitleAndChannelContainer>
                <p>{item.snippet.title}</p>
                {!channelIsLoading && !channelError && (
                    <ChannelInfo
                        thumbnail={
                            channelResult?.items[0]?.snippet?.thumbnails?.default?.url ??
                            channelResult?.items[0]?.snippet?.thumbnails?.medium?.url ??
                            channelResult?.items[0]?.snippet?.thumbnails?.high?.url
                        }
                        title={channelResult?.items[0]?.snippet?.title}
                    />
                )}
            </TitleAndChannelContainer>

        </RelatedVideoContainer>
    )
}

export default RelatedVideo;
