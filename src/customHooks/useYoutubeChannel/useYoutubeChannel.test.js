import axios from "axios";
import { useYoutubeChannel } from "./useYoutubeChannel";
import { act, renderHook } from "@testing-library/react-hooks";

function getControlledPromise() {
    let deferred;
    const promise = new Promise((resolve, reject) => {
        deferred = { resolve, reject };
    });

    return { deferred, promise };
}

const channelId = 'UCPGzT4wecuWM0BH9mPiulXg';

describe('useYoutubeChannel', () => {
    test('should call the "channel" module of the youtube API with the parameters provided', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: {} });

        const moduleEndPoint = 'https://www.googleapis.com/youtube/v3/channels';
        const expectedQuery = {
            "params": {
                "part": "snippet",
                "key": process.env.REACT_APP_YOUTUBE_API_KEY,
                "id": channelId
            }
        }

        await act(async () => renderHook(() => useYoutubeChannel(channelId)));

        expect(axios.get).toBeCalledWith(moduleEndPoint, expectedQuery);
    });

    describe('while fetching data', () => {
        test('handles loading state correctly', async () => {
            const { deferred, promise } = getControlledPromise();

            axios.get = jest.fn(() => promise);

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeChannel(channelId));

            expect(result.current.channelIsLoading).toBe(true);
            deferred.resolve({ data: {} });

            await waitForNextUpdate();
            expect(result.current.channelIsLoading).toBe(false);
        });
    });

    describe('when data has been fetched successfully', () => {
        test('handles successful state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);

            const mockResult = require('../../mocks/youtube-channel-mock.json');
            const { result, waitForNextUpdate } = renderHook(() => useYoutubeChannel(channelId));

            deferred.resolve({ data: mockResult });

            await waitForNextUpdate();

            expect(result.current.channelResult).toStrictEqual(mockResult);
        });
    });

    describe('when there was an error fetching', () => {
        test('handles error state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);

            const mockError = 'Error on fetching';

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeChannel(channelId));
            deferred.reject(mockError);

            await waitForNextUpdate();

            expect(result.current.channelError).toStrictEqual(mockError);
        });
    });

});