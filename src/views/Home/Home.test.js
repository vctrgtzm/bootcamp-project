import { render, screen } from "@testing-library/react";
import GlobalContext from "../../state/context";
import Home from "./Home";


describe('Home', () => {
    describe('when fetching data', () => {
        test('loading indicator should be rendered', () => {
            render(
                <GlobalContext.Provider
                    value={{
                        youtubeSearch: {
                            searchIsLoading: true,
                            searchResult: null,
                            searchError: null
                        },
                        youtubeVideo: {
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <Home />
                </GlobalContext.Provider>
            );

            const loadingIndicator = screen.queryByRole('progressbar');
            expect(loadingIndicator).toBeInTheDocument();
        });
    });

    describe('when data has been fetched', () => {
        test('all the items should be rendered', () => {
            const mockSearchResult = require('../../mocks/youtube-videos-mock.json');

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeSearch: {
                            searchIsLoading: false,
                            searchResult: mockSearchResult,
                            searchError: null
                        },
                        youtubeVideo: {
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <Home />
                </GlobalContext.Provider>
            );

            const videoItems = screen.queryAllByRole('listitem');
            expect(videoItems).toHaveLength(mockSearchResult.items.length);
        });
    });

    describe('when an error ocurred during fetching', () => {
        test('the error message should be rendered', () => {

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeSearch: {
                            searchIsLoading: false,
                            searchResult: null,
                            searchError: 'Error fetching'
                        },
                        youtubeVideo: {
                            setVideoId: jest.fn()
                        }
                    }}
                >
                    <Home />
                </GlobalContext.Provider>
            );

            const errorMessage = screen.queryByText('Something went wrong when fetching data from youtube API :(');
            expect(errorMessage).toBeInTheDocument();
        })
    });
});
