import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import useFavorites from "../../customHooks/useFavorites/useFavorites";
import { useYoutubeChannel } from "../../customHooks/useYoutubeChannel/useYoutubeChannel";
import actionTypes from "../../state/actionTypes";
import GlobalContext from "../../state/context";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import { FavButton, FavButtonBlue, IFameContainer, TitleAndFavButton, VideoContainer, VideoDetailsContainer } from './VideoPlayer.styled';



const VideoPlayer = ({ item, watchingItem }) => {
    const { setShowLoginModal, globalState, globalDispatch } = useContext(GlobalContext);
    const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites(watchingItem);
    const [isInFavs, setIsInFavs] = useState(isInFavorites(watchingItem));
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(item?.snippet?.channelId);

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [isInFavs]);

    useEffect(() => {
        setIsInFavs(isInFavorites());
    }, [isInFavorites, globalState.user.favoriteVideos]);


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
        <VideoDetailsContainer>
            <VideoContainer>
                <IFameContainer dangerouslySetInnerHTML={{ __html: item?.player?.embedHtml }} />
            </VideoContainer>

            <TitleAndFavButton>
                <h2>{item?.snippet?.title}</h2>
                {isInFavs ? (
                    <FavButtonBlue
                        icon={faHeart}
                        size="2x"
                        data-tip="Remove from favorites"
                        onClick={(e) => handleRemoveFromFav(e, watchingItem)}
                    />
                ) : (
                    <FavButton
                        icon={faHeart}
                        size="2x"
                        data-tip="Add to favorites"
                        className="full-opacity-mobile"
                        onClick={(e) => handleAddToFav(e, watchingItem)}
                    />
                )}
            </TitleAndFavButton>
            {!channelIsLoading && !channelError && (
                <ChannelInfo
                    thumbnail={
                        channelResult?.items[0]?.snippet?.thumbnails?.default?.url ??
                        channelResult?.items[0]?.snippet?.thumbnails?.medium?.url ??
                        channelResult?.items[0]?.snippet?.thumbnails?.high?.url
                    }
                    thumbnailSize="50px"
                    title={channelResult?.items[0]?.snippet?.title}
                    style={{ marginLeft: '0px' }}
                />
            )}
            <p className="hidden-mobile">{item?.snippet?.description}</p>
        </VideoDetailsContainer>
    );

}

export default VideoPlayer;
