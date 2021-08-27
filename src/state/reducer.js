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
        default:
            return state;
    }
};
