import { fireEvent, render, screen } from '@testing-library/react';
import GlobalContext from '../../state/context';
import RelatedVideos from './RelatedVideos';


describe('when clicking one of the related videos', () => {
    test('should set the videoId to the id of the corresponding related video', () => {
        const setVideoId = jest.fn();
        const relatedVideosResultMock = require('../../mocks/youtube-related-videos-mock.json');

        render(
            <GlobalContext.Provider value={{ youtubeVideo: { setVideoId } }}>
                <RelatedVideos
                    relatedVideosResult={relatedVideosResultMock}
                    setVideoId={setVideoId}
                />
            </GlobalContext.Provider>
        );

        const relatedVideos = screen.queryAllByRole('listitem');

        relatedVideos.forEach((item, idx) => {
            fireEvent.click(item);
            expect(setVideoId).toBeCalledWith(relatedVideosResultMock.items[idx].id.videoId);
        });
    });
});
