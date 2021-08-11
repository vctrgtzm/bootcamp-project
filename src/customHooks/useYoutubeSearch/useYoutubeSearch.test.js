import axios from 'axios';
import { useYoutubeSearch } from './useYoutubeSearch';
import { act, renderHook } from '@testing-library/react-hooks';

function getControlledPromise() {
    let deferred;
    const promise = new Promise((resolve, reject) => {
        deferred = { resolve, reject };
    });

    return { deferred, promise };
}

describe('useYoutubeSearch', () => {

    test('should call the "search" module of the youtube API with the parameters provided', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: {} })

        const searchTerm = 'wizeline';
        const maxResults = 10;
        const moduleEndPoint = 'https://www.googleapis.com/youtube/v3/search';
        const expectedQuery = {
            "params": {
                "key": process.env.REACT_APP_YOUTUBE_API_KEY,
                "maxResults": maxResults,
                "part": "snippet",
                "q": searchTerm,
                "type": "video"
            }
        }

        await act(async () => renderHook(() => useYoutubeSearch(searchTerm, maxResults)));

        expect(axios.get).toBeCalledWith(moduleEndPoint, expectedQuery);
    });

    describe('while fetching data', () => {
        test('handles loading state correctly', async () => {
            const { deferred, promise } = getControlledPromise();

            axios.get = jest.fn(() => promise);

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeSearch('wizeline', 10));

            expect(result.current.searchIsLoading).toBe(true);
            deferred.resolve({ data: {} });

            await waitForNextUpdate();
            expect(result.current.searchIsLoading).toBe(false);
        });
    });

    describe('when data has been fetched successfully', () => {
        test('handles successful state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);

            const mockResult = { kind: 'youtube#searchListResponse', items: [] };

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeSearch('wizeline', 10));

            deferred.resolve({ data: mockResult })

            await waitForNextUpdate();

            expect(result.current.searchResult).toStrictEqual(mockResult);

        });
    });

    describe('when there was an error fetching', () => {
        test('handles error state correctly', async () => {
            const { deferred, promise } = getControlledPromise();
            axios.get = jest.fn(() => promise);

            const mockError = 'Error on fetching';

            const { result, waitForNextUpdate } = renderHook(() => useYoutubeSearch('wizeline', 10));
            deferred.reject(mockError);

            await waitForNextUpdate();

            expect(result.current.searchError).toStrictEqual(mockError);
        });
    });
});
