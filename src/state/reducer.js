import actionTypes from "./actionTypes";
import { themes } from "./themes";

export default function globalReducer(state, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_THEME:
            return { ...state, theme: state.theme === themes.dark ? themes.light : themes.dark };
        case actionTypes.USER_LOGIN:
            return { ...state, user: action.payload };
        case actionTypes.USER_LOGOUT:
            return { ...state, user: null };
        case actionTypes.SET_PENDING_FAV:
            return { ...state, pendingFav: action.payload };
        case actionTypes.REMOVE_PENDING_FAV:
            return { ...state, pendingFav: null };
        case actionTypes.UPDATE_FAVORITES:
            return { ...state, user: { favoriteVideos: action.payload, ...state.user } }
        default:
            return state;
    }
};
