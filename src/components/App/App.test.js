import { render, screen } from "@testing-library/react";
import * as useYoutubeSearch from "../../customHooks/useYoutubeSearch/useYoutubeSearch";
import * as useYoutubeVideo from "../../customHooks/useYoutubeVideo/useYoutubeVideo";
import App from './App';

describe('App', () => {    

    test('should render the header', () => {
        jest.spyOn(useYoutubeVideo, 'useYoutubeVideo').mockImplementation(() => ({
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
        render(<App />);

        const header = screen.queryByRole('banner');
        expect(header).toBeInTheDocument();
    });

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
        render(<App />);

        const view = screen.queryByRole('main');
        expect(view).toBeInTheDocument();
    });
});
