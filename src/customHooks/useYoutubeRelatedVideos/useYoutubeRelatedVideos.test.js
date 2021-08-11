import axios from 'axios';
import { useYoutubeRelatedVideos } from './useYoutubeRelatedVideos';
import { act, renderHook } from '@testing-library/react-hooks';

function getControlledPromise() {
    let deferred;
    const promise = new Promise((resolve, reject) => {
        deferred = { resolve, reject };
    });

    return { deferred, promise };
}

describe('useYoutubeRelatedVideos', () => {

    test('should call the "search" module of the youtube API with the parameters provided', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: {} });

        const videoId = "nmXMgqjQzls";
        const maxResults = 10;
        const moduleEndPoint = 'https://www.googleapis.com/youtube/v3/search'
        const expectedQuery = {
            "params": {
                "part": "snippet",
                "maxResults": maxResults,
                "key": process.env.REACT_APP_YOUTUBE_API_KEY,
                "relatedToVideoId": videoId,
                "type": "video"
            }
        }

        await act(async () => renderHook(() => useYoutubeRelatedVideos(videoId, maxResults)));

        expect(axios.get).toBeCalledWith(moduleEndPoint, expectedQuery);
    });

    describe('while fetching data', () => {
        test('handles loading state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);
            const videoId = "nmXMgqjQzls";
            const maxResults = 10;

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeRelatedVideos(videoId, maxResults));

            expect(result.current.relatedVideosIsLoading).toBe(true);
            deferred.resolve({ data: {} });

            await waitForNextUpdate();
            expect(result.current.relatedVideosIsLoading).toBe(false);
        });
    });

    describe('when data has been fetched successfully', () => {
        test('handles success state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);
            const videoId = "nmXMgqjQzls";
            const maxResults = 10;
            const mockResult = { kind: 'youtube#searchListResponse', items: [] };

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeRelatedVideos(videoId, maxResults));
            deferred.resolve({ data: mockResult });

            await waitForNextUpdate();
            expect(result.current.relatedVideosResult).toStrictEqual(mockResult);
        });
    });

    describe('when there was an error fetching', () => {
        test('handles error state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);
            const videoId = "nmXMgqjQzls";
            const maxResults = 10;
            const mockError = 'Error on fetching';

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeRelatedVideos(videoId, maxResults));
            deferred.reject(mockError);

            await waitForNextUpdate();
            expect(result.current.relatedVideosError).toStrictEqual(mockError);
        });
    })
});
