import { fireEvent, render, screen } from '@testing-library/react';
import GlobalContext from '../../state/context';
import VideoPlayer from './VideoPlayer';


describe('VideoPlayer', () => {
    test('should set the video id to null when clicking "Back to videos" button', () => {
        const videoDataMock = require('../../mocks/youtube-video-details-mock.json');
        const setVideoId = jest.fn();
        render(
            <GlobalContext.Provider
                value={{
                    youtubeVideo: {
                        setVideoId,
                        videoData: videoDataMock
                    }
                }}
            >
                <VideoPlayer />
            </GlobalContext.Provider>
        );

        const backToVideosButton = screen.queryByText(/back to videos/i);

        fireEvent.click(backToVideosButton);

        expect(setVideoId).toHaveBeenCalledWith(null);
    });
});
