import { useContext, useEffect } from "react";
import actionTypes from "../../state/actionTypes";
import GlobalContext from "../../state/context";

export default function useFavorites(item) {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { user } = globalState;
    const { favoriteVideos } = user;

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    });

    const addToFavorites = () => {
        favoriteVideos.push(item);
        globalDispatch({ type: actionTypes.UPDATE_FAVORITES, payload: favoriteVideos });
    }

    const removeFromFavorites = () => {
        const idx = favoriteVideos.findIndex(x => x.id.videoId === item.id.videoId);
        if (idx > -1) {
            favoriteVideos.splice(idx, 1);
            globalDispatch({ type: actionTypes.UPDATE_FAVORITES, payload: favoriteVideos });
        }
    }

    const isInFavorites = () => {
        const idx = favoriteVideos.findIndex(x => x.id.videoId === item.id.videoId);
        return idx > -1;
    }

    return { addToFavorites, removeFromFavorites, isInFavorites };
}