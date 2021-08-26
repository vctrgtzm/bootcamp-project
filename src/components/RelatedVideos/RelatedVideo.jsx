import { useContext } from "react";
import { useYoutubeChannel } from "../../customHooks/useYoutubeChannel/useYoutubeChannel";
import GlobalContext from "../../state/context";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import { RelatedVideoContainer, ThumbnailContainer, TitleAndChannelContainer } from "./RelatedVideo.styled";

const RelatedVideo = ({ item }) => {
    const { youtubeVideo: { setVideoId } } = useContext(GlobalContext);
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(item.snippet.channelId);

    return (
        <RelatedVideoContainer
            role="listitem"
            onClick={() => setVideoId(item.id.videoId)}            
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
