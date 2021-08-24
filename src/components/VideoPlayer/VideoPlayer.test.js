import { fireEvent, render, screen } from '@testing-library/react';
import GlobalContext from '../../state/context';
import VideoPlayer from './VideoPlayer';
import { themes } from '../../state/themes';
import * as useYoutubeChannel from '../../customHooks/useYoutubeChannel/useYoutubeChannel';
import { ThemeProvider } from 'styled-components';

const globalState = { theme: themes.dark }

describe('VideoPlayer', () => {
    test('should set the video id to null when clicking "Back to videos" button', () => {
        const videoDataMock = require('../../mocks/youtube-video-details-mock.json');
        const setVideoId = jest.fn();

        jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
            channelResult: { items: [] },
            channelIsLoading: false,
            channelError: null
        }));

        render(
            <GlobalContext.Provider
                value={{
                    youtubeVideo: {
                        setVideoId,
                        videoData: videoDataMock
                    }
                }}
            >
                <ThemeProvider theme={globalState.theme}>
                    <VideoPlayer />
                </ThemeProvider>
            </GlobalContext.Provider>
        );

        const backToVideosButton = screen.queryByText(/back to videos/i);

        fireEvent.click(backToVideosButton);

        expect(setVideoId).toHaveBeenCalledWith(null);
    });
});
