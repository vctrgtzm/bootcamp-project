import { render, screen } from "@testing-library/react";
import * as useYoutubeSearch from "../../customHooks/useYoutubeSearch/useYoutubeSearch";
import * as useYoutubeVideo from "../../customHooks/useYoutubeVideo/useYoutubeVideo";
import * as useYoutubeRelatedVideos from '../../customHooks/useYoutubeRelatedVideos/useYoutubeRelatedVideos';
import * as useYoutubeChannel from '../../customHooks/useYoutubeChannel/useYoutubeChannel';
import App from './App';

describe('App', () => {

    test('should render the header', () => {
        jest.spyOn(useYoutubeSearch, 'useYoutubeSearch').mockImplementation(() => ({
            searchResult: { items: [] },
            searchIsLoading: false,
            searchError: null,
            setSearchTerm: () => { },
            setSearchMaxResults: () => { }
        }));

        jest.spyOn(useYoutubeVideo, 'useYoutubeVideo').mockImplementation(() => ({
            videoData: { items: [] },
            videoIsLoading: false,
            videoError: null,
            videoId: null,
            setVideoId: () => { }
        }));

        jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
            channelResult: { items: [] },
            channelIsLoading: false,
            channelError: null
        }));

        render(<App />);

        const header = screen.queryByRole('banner');
        expect(header).toBeInTheDocument();
    });

    describe('when videoId is null', () => {
        test('should render a view', () => {
            jest.spyOn(useYoutubeSearch, 'useYoutubeSearch').mockImplementation(() => ({
                searchResult: { items: [] },
                searchIsLoading: false,
                searchError: null,
                setSearchTerm: () => { },
                setSearchMaxResults: () => { }
            }));

            jest.spyOn(useYoutubeVideo, 'useYoutubeVideo').mockImplementation(() => ({
                videoData: { items: [] },
                videoIsLoading: false,
                videoError: null,
                videoId: null,
                setVideoId: () => { }
            }));

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(<App />);

            const view = screen.queryByRole('main');
            expect(view).toBeInTheDocument();
        });

    });

    describe('when videoId is not null', () => {
        test('should render a view', () => {
            const mockVideoData = require('../../mocks/youtube-video-details-mock.json');
            const mockRelatedVideosData = require('../../mocks/youtube-related-videos-mock.json');
            
            jest.spyOn(useYoutubeSearch, 'useYoutubeSearch').mockImplementation(() => ({
                searchResult: { items: [] },
                searchIsLoading: false,
                searchError: null,
                setSearchTerm: () => { },
                setSearchMaxResults: () => { }
            }));

            jest.spyOn(useYoutubeVideo, 'useYoutubeVideo').mockImplementation(() => ({
                videoData: mockVideoData,
                videoIsLoading: false,
                videoError: null,
                videoId: 'nmXMgqjQzls',
                setVideoId: () => { }
            }));

            jest.spyOn(useYoutubeRelatedVideos, 'useYoutubeRelatedVideos').mockImplementation(() => ({
                relatedVideosResult: mockRelatedVideosData,
                relatedVideosIsLoading: false,
                relatedVideosError: null,
                setMaxRelatedVideosResults: jest.fn()
            }));

            jest.spyOn(useYoutubeChannel, 'useYoutubeChannel').mockImplementation(() => ({
                channelResult: { items: [] },
                channelIsLoading: false,
                channelError: null
            }));

            render(<App />);

            const view = screen.queryByRole('main');
            expect(view).toBeInTheDocument();
        });

    });

});
