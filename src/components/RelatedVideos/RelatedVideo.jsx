import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import useFavorites from "../../customHooks/useFavorites/useFavorites";
import { useYoutubeChannel } from "../../customHooks/useYoutubeChannel/useYoutubeChannel";
import actionTypes from "../../state/actionTypes";
import GlobalContext from "../../state/context";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import { FavButton, FavButtonBlue } from "../VideoCard/VideoCard.styled";
import { RelatedVideoContainer, ThumbnailContainer, TitleAndChannelContainer } from "./RelatedVideo.styled";

const RelatedVideo = ({ item, fromFavorites }) => {
    const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites(item);
    const [isInFavs, setIsInFavs] = useState(isInFavorites());
    const { setShowLoginModal, globalState, globalDispatch } = useContext(GlobalContext);
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(item.snippet.channelId);

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [isInFavs]);

    useEffect(() => {
        setIsInFavs(isInFavorites());
    }, [isInFavorites, globalState.user?.favoriteVideos]);

    const handleAddToFav = (e, item) => {
        e.preventDefault();
        if (!globalState.user) {
            setShowLoginModal(true);
            globalDispatch({ type: actionTypes.SET_PENDING_FAV, payload: item });
        } else {
            addToFavorites();
            setIsInFavs(true);
        }
    }

    const handleRemoveFromFav = (e, item) => {
        e.preventDefault();
        removeFromFavorites();
        setIsInFavs(false);
    }

    return (
        <RelatedVideoContainer
            to={{
                pathname: `/${fromFavorites ? 'favorites' : 'video'}/${item.id.videoId}`,
                state: { watchingItem: item }
            }}
            role="listitem"
        >
            <ThumbnailContainer
                thumbnail={
                    item.snippet.thumbnails?.high?.url ||
                    item.snippet.thumbnails?.medium?.url ||
                    item.snippet.thumbnails?.default?.url
                }
            >
                {isInFavs ? (
                    <FavButtonBlue
                        icon={faHeart}
                        size="1x"
                        data-tip="Remove from favorites"
                        onClick={(e) => handleRemoveFromFav(e, item)}
                    />
                ) : (
                    <FavButton
                        icon={faHeart}
                        size="1x"
                        data-tip="Add to favorites"
                        className="full-opacity-mobile"
                        onClick={(e) => handleAddToFav(e, item)}
                    />
                )}
            </ThumbnailContainer>
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
