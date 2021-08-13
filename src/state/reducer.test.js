import actionTypes from "./actionTypes";
import globalReducer from "./reducer";
import { themes } from "./themes";

describe('globalReducer', () => {
    test('should return the light theme when the current is dark', () => {
        const currentState = { theme: themes.dark };

        const result = globalReducer(currentState, { type: actionTypes.SET_THEME });
        const expected = {...currentState, theme: themes.light};

        expect(result).toStrictEqual(expected);
    });

    test('should return the dark theme when the current is light', () => {
        const currentState = { theme: themes.light };

        const result = globalReducer(currentState, { type: actionTypes.SET_THEME });
        const expected = {...currentState, theme: themes.dark};

        expect(result).toStrictEqual(expected);
    });

    describe('when an unknown action is called', () => {
        test('should return the current state', () => {
            const currentState = { theme: themes.dark };

            const result = globalReducer(currentState, { type: 'unknown action' });
            expect(result).toStrictEqual(currentState);
        });
    });
});