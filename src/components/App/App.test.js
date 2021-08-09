import { render, screen } from "@testing-library/react";
import * as useYoutubeHooks from "../../customHooks/useYoutube";
import App from './App';

describe('App', () => {    

    test('should render the header', () => {
        jest.spyOn(useYoutubeHooks, 'useYoutubeSearch').mockImplementation(() => ({
            searchResult: { items: [] },
            searchIsLoading: false,
            searchError: null,
            setSearchTerm: () => { },
            setSearchMaxResults: () => { }
        }));
        
        jest.spyOn(useYoutubeHooks, 'useYoutubeVideo').mockImplementation(() => ({
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
        jest.spyOn(useYoutubeHooks, 'useYoutubeSearch').mockImplementation(() => ({
            searchResult: { items: [] },
            searchIsLoading: false,
            searchError: null,
            setSearchTerm: () => { },
            setSearchMaxResults: () => { }
        }));
        
        jest.spyOn(useYoutubeHooks, 'useYoutubeVideo').mockImplementation(() => ({
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
