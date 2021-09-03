import axios from 'axios';
import { useYoutubeVideo } from './useYoutubeVideo';
import { renderHook } from '@testing-library/react-hooks';


describe('useYoutubeVideo', () => {

    test('shouldn not call the youtube API when it is invoked', () => {
        axios.get = jest.fn();

        renderHook(() => useYoutubeVideo());

        expect(axios.get).toBeCalledTimes(0);
    });

    test.todo('implement rest of the tests');
});
