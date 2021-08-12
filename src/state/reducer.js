import actionTypes from "./actionTypes";
import { themes } from "./themes";

export default function globalReducer(state, action) {
    switch (action.type) {
        case actionTypes.SET_THEME:            
            return { ...state, theme: state.theme === themes.dark ? themes.light : themes.dark }
        default:
            return state;
    }
};
