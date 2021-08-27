import { fireEvent, render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';
import { themes } from '../../state/themes';
import { ThemeProvider } from 'styled-components';
import * as useYoutubeChannel from '../../customHooks/useYoutubeChannel/useYoutubeChannel';

const globalState = { theme: themes.dark }
const mockData = require('../../mocks/youtube-videos-mock.json');
const videoItem = mockData.items[0];
const setVideoId = jest.fn();

describe('VideoCard', () => {

    describe('when clicking a VideoCard', () => {
        test('the videoId should set to the id of the video rendered', () => {

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(
                <ThemeProvider theme={globalState.theme} >
                    <VideoCard
                        thumbnail={videoItem.snippet.thumbnails.default.url}
                        title={videoItem.snippet.title}
                        description={videoItem.snippet.description}
                        videoId={videoItem.id}
                        setVideoId={setVideoId}
                    />
                </ThemeProvider>
            );

            const videoCard = screen.queryByRole('listitem');
            fireEvent.click(videoCard);

            expect(setVideoId).toHaveBeenCalledWith(videoItem.id);
        });
    });

    describe('when the channel is not loading and no error on fetching channel data', () => {
        test('should render the channel info', () => {

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(
                <ThemeProvider theme={globalState.theme} >
                    <VideoCard
                        thumbnail={videoItem.snippet.thumbnails.default.url}
                        title={videoItem.snippet.title}
                        description={videoItem.snippet.description}
                        videoId={videoItem.id}
                        setVideoId={setVideoId}
                    />
                </ThemeProvider>
            );

            const channelThumbnail = screen.queryByRole('figure');

            expect(channelThumbnail).toBeInTheDocument();
        });
    });

    describe('when the channel is loading', () => {
        test('the channel info should not be rendered', () => {

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: true,
                channelError: null
            }));

            render(
                <ThemeProvider theme={globalState.theme} >
                    <VideoCard
                        thumbnail={videoItem.snippet.thumbnails.default.url}
                        title={videoItem.snippet.title}
                        description={videoItem.snippet.description}
                        videoId={videoItem.id}
                        setVideoId={setVideoId}
                    />
                </ThemeProvider>
            );

            const channelThumbnail = screen.queryByRole('figure');

            expect(channelThumbnail).not.toBeInTheDocument();
        });
    });

    describe('when there was an error fetching channel data', () => {
        test('the channel info should not be rendered', () => {

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: 'Error fetching'
            }));

            render(
                <ThemeProvider theme={globalState.theme} >
                    <VideoCard
                        thumbnail={videoItem.snippet.thumbnails.default.url}
                        title={videoItem.snippet.title}
                        description={videoItem.snippet.description}
                        videoId={videoItem.id}
                        setVideoId={setVideoId}
                    />
                </ThemeProvider>
            );

            const channelThumbnail = screen.queryByRole('figure');

            expect(channelThumbnail).not.toBeInTheDocument();
        });
    });
});
