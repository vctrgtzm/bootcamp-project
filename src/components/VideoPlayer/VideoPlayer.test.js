import { fireEvent, render, screen } from '@testing-library/react';
import GlobalContext from '../../state/context';
import VideoPlayer from './VideoPlayer';
import { themes } from '../../state/themes';
import * as useYoutubeChannel from '../../customHooks/useYoutubeChannel/useYoutubeChannel';
import { ThemeProvider } from 'styled-components';

const globalState = { theme: themes.dark }
const videoDataMock = require('../../mocks/youtube-video-details-mock.json');
const setVideoId = jest.fn();

describe('VideoPlayer', () => {
    test('should set the video id to null when clicking "Back to videos" button', () => {

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

    describe('when the channel is not loading and no error on fetching channel data', () => {
        test('should render the channel info', () => {

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

            const channelThumbnail = screen.queryByRole('figure');

            expect(channelThumbnail).toBeInTheDocument();
        });
    });

    describe('when the channel is loading', () => {
        test('should not render the channel info', () => {

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: true,
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

            const channelThumbnail = screen.queryByRole('figure');

            expect(channelThumbnail).not.toBeInTheDocument();
        });
    });

    describe('when there was an error fetching channel data', () => {
        test('should not render the channel info', () => {

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: 'Error fetching'
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

            const channelThumbnail = screen.queryByRole('figure');

            expect(channelThumbnail).not.toBeInTheDocument();
        });
    });
});
