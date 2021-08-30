import { VideoItemContainer, ThumbnailContainer, VideoRelativeContiner, DescriptionContainer, LoadingIndicator, FavButton, FavButtonBlue } from './VideoCard.styled';
import { useYoutubeChannel } from '../../customHooks/useYoutubeChannel/useYoutubeChannel'
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../state/context';
import actionTypes from '../../state/actionTypes';
import { addToFavorites, isInFavorites, removeFromFavorites } from '../../helpers/favoritesManager';
import ReactTooltip from 'react-tooltip';
function VideoCard({ thumbnail, title, description, videoId, channelId, item }) {
    const [isInFavs, setIsInFavs] = useState(isInFavorites(item));
    const {
        channelResult,
        channelIsLoading,
        channelError
    } = useYoutubeChannel(channelId);

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [isInFavs]);

    //check if still in favs
    useEffect(() => {
        setIsInFavs(isInFavorites(item));
    }, [item]);

    const { setShowLoginModal, globalState, globalDispatch } = useContext(GlobalContext);

    const handleAddToFav = (e, item) => {
        e.preventDefault();
        if (!globalState.user) {
            setShowLoginModal(true);
            globalDispatch({ type: actionTypes.SET_PENDING_FAV, payload: item });
        } else {
            addToFavorites(item);
            setIsInFavs(true);
        }
    }

    const handleRemoveFromFav = (e, item) => {
        e.preventDefault();
        removeFromFavorites(item);
        setIsInFavs(false);
    }

    return (
        <VideoRelativeContiner>
            <VideoItemContainer
                to={{
                    pathname: `/video/${videoId}`,
                    state: { watchingItem: item }
                }}
                role="listitem"
            >
                <ThumbnailContainer thumbnail={thumbnail}>
                    {isInFavs ? (
                        <FavButtonBlue
                            icon={faHeart}
                            size="2x"
                            data-tip="Remove from favorites"
                            onClick={(e) => handleRemoveFromFav(e, item)}
                        />
                    ) : (
                        <FavButton
                            icon={faHeart}
                            size="2x"
                            data-tip="Add to favorites"
                            className="full-opacity-mobile"
                            onClick={(e) => handleAddToFav(e, item)}
                        />
                    )}
                </ThumbnailContainer>
                <LoadingIndicator />
                <h2>{title}</h2>
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
                <DescriptionContainer className="display-block-mobile description-container">
                    <p>{description}</p>
                </DescriptionContainer>
            </VideoItemContainer>
        </VideoRelativeContiner>
    );

}

export default VideoCard;
