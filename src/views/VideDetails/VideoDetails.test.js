import { render, screen } from "@testing-library/react";
import * as useYoutubeRelatedVideos from "../../customHooks/useYoutubeRelatedVideos/useYoutubeRelatedVideos";
import GlobalContext from "../../state/context";
import VideoDetails from "./VideoDetails";
import { themes } from '../../state/themes';
import { ThemeProvider } from 'styled-components';
import * as useYoutubeChannel from '../../customHooks/useYoutubeChannel/useYoutubeChannel';

const mockVideoData = require('../../mocks/youtube-video-details-mock.json');

describe('VideoDetails', () => {

    describe('when data is being fetched', () => {
        test('the loading indicator should be rendered', () => {
            render(
                <GlobalContext.Provider
                    value={{
                        youtubeVideo: {
                            videoData: null,
                            videoIsLoading: true,
                            videoError: null,
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <ThemeProvider theme={themes.dark}>
                        <VideoDetails />
                    </ThemeProvider>
                </GlobalContext.Provider>
            );

            const loadingIndicator = screen.queryByRole('progressbar');
            expect(loadingIndicator).toBeInTheDocument();
        });
    });

    describe('when data has been fetched', () => {
        test('should render the video player', () => {

            jest.spyOn(useYoutubeRelatedVideos, 'useYoutubeRelatedVideos').mockImplementation(() => ({
                relatedVideosResult: { items: [] },
                relatedVideosIsLoading: false,
                relatedVideosError: null,
                setMaxRelatedVideosResults: () => { }
            }));

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeVideo: {
                            videoData: mockVideoData,
                            videoIsLoading: false,
                            videoError: null,
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <ThemeProvider theme={themes.dark}>
                        <VideoDetails />
                    </ThemeProvider>
                </GlobalContext.Provider>
            );

            const videoPlayer = document.querySelector(`iframe[src="//www.youtube.com/embed/${mockVideoData.items[0].id}"]`);
            expect(videoPlayer).toBeInTheDocument();
        });

        test('should render the "back to videos" button', () => {

            jest.spyOn(useYoutubeRelatedVideos, 'useYoutubeRelatedVideos').mockImplementation(() => ({
                relatedVideosResult: { items: [] },
                relatedVideosIsLoading: false,
                relatedVideosError: null,
                setMaxRelatedVideosResults: () => { }
            }));

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeVideo: {
                            videoData: mockVideoData,
                            videoIsLoading: false,
                            videoError: null,
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <ThemeProvider theme={themes.dark}>
                        <VideoDetails />
                    </ThemeProvider>
                </GlobalContext.Provider>
            );

            const backToVideosButton = screen.queryByText(/Back to videos/i);
            expect(backToVideosButton).toBeInTheDocument();

        });

        test('should render the title and description of the video', () => {
            jest.spyOn(useYoutubeRelatedVideos, 'useYoutubeRelatedVideos').mockImplementation(() => ({
                relatedVideosResult: { items: [] },
                relatedVideosIsLoading: false,
                relatedVideosError: null,
                setMaxRelatedVideosResults: () => { }
            }));

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeVideo: {
                            videoData: mockVideoData,
                            videoIsLoading: false,
                            videoError: null,
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <ThemeProvider theme={themes.dark}>
                        <VideoDetails />
                    </ThemeProvider>
                </GlobalContext.Provider>
            );

            const title = screen.queryByText(mockVideoData.items[0].snippet.title);
            expect(title).toBeInTheDocument();
            const description = screen.queryByText(mockVideoData.items[0].snippet.description);
            expect(description).toBeInTheDocument();
        });

        test('should render the list of related videos contained in a result of a search request', () => {
            const relatedVideosDataMock = require('../../mocks/youtube-related-videos-mock.json')

            jest.spyOn(useYoutubeRelatedVideos, 'useYoutubeRelatedVideos').mockImplementation(() => ({
                relatedVideosResult: relatedVideosDataMock,
                relatedVideosIsLoading: false,
                relatedVideosError: null,
                setMaxRelatedVideosResults: () => { }
            }));

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeVideo: {
                            videoData: mockVideoData,
                            videoIsLoading: false,
                            videoError: null,
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <ThemeProvider theme={themes.dark}>
                        <VideoDetails />
                    </ThemeProvider>
                </GlobalContext.Provider>
            );

            const relatedVideosList = screen.queryAllByRole('listitem');
            expect(relatedVideosList).toHaveLength(relatedVideosDataMock.items.length);
        });
    });

    describe('when an error ocurred during fetching', () => {
        test('the error message should be rendered', () => {
            jest.spyOn(useYoutubeRelatedVideos, 'useYoutubeRelatedVideos').mockImplementation(() => ({
                relatedVideosResult: null,
                relatedVideosIsLoading: false,
                relatedVideosError: 'Error fetching',
                setMaxRelatedVideosResults: () => { }
            }));

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeVideo: {
                            videoData: null,
                            videoIsLoading: false,
                            videoError: 'Error fetching',
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <ThemeProvider theme={themes.dark}>
                        <VideoDetails />
                    </ThemeProvider>
                </GlobalContext.Provider>
            );

            const errorMessage = screen.queryByText('Something went wrong when fetching data from youtube API :(');
            expect(errorMessage).toBeInTheDocument();
        });
    });
});
