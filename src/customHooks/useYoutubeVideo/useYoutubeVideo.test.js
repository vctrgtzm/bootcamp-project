import axios from 'axios';
import { useYoutubeVideo } from './useYoutubeVideo';
import { act, renderHook } from '@testing-library/react-hooks';

function getControlledPromise() {
    let deferred;
    const promise = new Promise((resolve, reject) => {
        deferred = { resolve, reject };
    });

    return { deferred, promise };
}

describe('useYoutubeVideo', () => {

    test('shouldn not call the youtube API when it is invoked', () => {
        axios.get = jest.fn();

        renderHook(() => useYoutubeVideo());

        expect(axios.get).toBeCalledTimes(0);
    });

    test('should call the "videos" module of the youtube API with the parameters provided when a videoId is set', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: {} })

        const { setVideoId } = renderHook(() => useYoutubeVideo()).result.current;

        const videoId = "nmXMgqjQzls"
        const moduleEndPoint = 'https://www.googleapis.com/youtube/v3/videos';
        const expectedQuery = {
            "params": {
                "part": "snippet,player",
                "id": videoId,
                "key": process.env.REACT_APP_YOUTUBE_API_KEY
            }
        }

        await act(async () => setVideoId(videoId));

        expect(axios.get).toBeCalledWith(moduleEndPoint, expectedQuery);
    });

    describe('while fetching data', () => {
        test('handles loading state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);
            const videoId = "nmXMgqjQzls"
            const { result, waitForNextUpdate } = renderHook(() => useYoutubeVideo());

            await act(async () => result.current.setVideoId(videoId));

            expect(result.current.videoIsLoading).toBe(true);
            deferred.resolve({ data: {} });

            await waitForNextUpdate();
            expect(result.current.videoIsLoading).toBe(false);

        });
    });

    describe('when data has been fetched successfuly', () => {
        test('handles successful state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);
            const videoId = "nmXMgqjQzls";
            const mockResult = { kind: 'youtube#videoListResponse', items: [] }
            const { result, waitForNextUpdate } = renderHook(() => useYoutubeVideo());

            await act(async () => result.current.setVideoId(videoId));
            deferred.resolve({ data: mockResult })

            await waitForNextUpdate();

            expect(result.current.videoData).toStrictEqual(mockResult);
        });
    });

    describe('when there was an error fetching', () => {
        test('handles error state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);
            const videoId = "nmXMgqjQzls";
            const mockError = 'Error on fetching';
            const { result, waitForNextUpdate } = renderHook(() => useYoutubeVideo());

            await act(async () => result.current.setVideoId(videoId));
            deferred.reject(mockError);

            await waitForNextUpdate();

            expect(result.current.videoError).toStrictEqual(mockError);

        });
    });
});
