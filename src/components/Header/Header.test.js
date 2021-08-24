import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalContext from '../../state/context';
import Header from './Header';
import { themes } from '../../state/themes';
import actionTypes from '../../state/actionTypes';

const globalState = { theme: themes.dark };
const globalDispatch = jest.fn();

describe('Header', () => {
    test('should render logo', () => {
        render(
            <ThemeProvider theme={themes.dark}>
                <Header />
            </ThemeProvider>
        );

        const logo = screen.queryByRole("img");
        expect(logo).toBeInTheDocument();
    });

    test('should render navigation bar', () => {
        render(
            <ThemeProvider theme={themes.dark}>
                <Header />
            </ThemeProvider>
        );

        const navBar = screen.queryByRole("navigation");
        expect(navBar).toBeInTheDocument();
    });

    test('should render search input', () => {
        render(
            <ThemeProvider theme={themes.dark}>
                <Header />
            </ThemeProvider>
        );

        const searchInput = screen.queryByRole("search");
        expect(searchInput).toBeInTheDocument();
    });

    test('should render theme toggle', () => {
        render(
            <ThemeProvider theme={themes.dark}>
                <Header />
            </ThemeProvider>
        );

        const themeToggle = screen.queryByRole("switch");
        expect(themeToggle).toBeInTheDocument();
    });

    test('should render avatar', () => {
        render(
            <ThemeProvider theme={themes.dark}>
                <Header />
            </ThemeProvider>
        );

        const avatar = screen.queryByRole("figure");
        expect(avatar).toBeInTheDocument();
    });

    describe('when enter is pressed on search input', () => {

        const newSearchTerm = 'react tutorials';

        describe('and the length of the search term is greater than 0', () => {
            test('the new search term should be set', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchInput = screen.queryByPlaceholderText(/search.../i);

                fireEvent.change(searchInput, { target: { value: newSearchTerm } });

                fireEvent.keyDown(searchInput, { key: 'Enter' });

                expect(setSearchTerm).toBeCalledWith(newSearchTerm);
            });

            test('the videoId should be set to null', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                const newSearchTerm = 'react tutorials';

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchInput = screen.queryByPlaceholderText(/search.../i);
                fireEvent.change(searchInput, { target: { value: newSearchTerm } });
                fireEvent.keyDown(searchInput, { key: 'Enter' });
                expect(setVideoId).toBeCalledWith(null);
            });
        });

        describe('and the length of the search term is 0', () => {
            test('the new search term should not be set', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                const newSearchTerm = '';

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchInput = screen.queryByPlaceholderText(/search.../i);
                fireEvent.change(searchInput, { target: { value: newSearchTerm } });
                fireEvent.keyDown(searchInput, { key: 'Enter' });
                expect(setSearchTerm).not.toBeCalled();
            });

            test('the videoId should not be set to null', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                const newSearchTerm = '';

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchInput = screen.queryByPlaceholderText(/search.../i);
                fireEvent.change(searchInput, { target: { value: newSearchTerm } });
                fireEvent.keyDown(searchInput, { key: 'Enter' });
                expect(setVideoId).not.toBeCalled();
            });
        });
    });

    describe('when search button is clicked', () => {
        describe('and the length of the search term is grater than 0', () => {
            test('the new search term should be set', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                const newSearchTerm = 'react tutorials';

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchButton = screen.queryByRole('button');
                const searchInput = screen.queryByPlaceholderText(/search.../i);
                fireEvent.change(searchInput, { target: { value: newSearchTerm } });
                fireEvent.click(searchButton);

                expect(setSearchTerm).toBeCalledWith(newSearchTerm);
            });

            test('the video id should be set to null', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                const newSearchTerm = 'react tutorials';

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchButton = screen.queryByRole('button');
                const searchInput = screen.queryByPlaceholderText(/search.../i);
                fireEvent.change(searchInput, { target: { value: newSearchTerm } });
                fireEvent.click(searchButton);

                expect(setVideoId).toBeCalledWith(null);
            });
        });

        describe('and the length of the search term is 0', () => {
            test('the new search term should be set', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                const newSearchTerm = '';

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchButton = screen.queryByRole('button');
                const searchInput = screen.queryByPlaceholderText(/search.../i);
                fireEvent.change(searchInput, { target: { value: newSearchTerm } });
                fireEvent.click(searchButton);

                expect(setSearchTerm).not.toBeCalled();
            });

            test('the video id should be set to null', () => {
                const setSearchTerm = jest.fn();
                const setVideoId = jest.fn();

                const newSearchTerm = '';

                render(
                    <GlobalContext.Provider
                        value={{
                            youtubeSearch: { setSearchTerm },
                            youtubeVideo: { setVideoId },
                            globalState,
                            globalDispatch
                        }}
                    >
                        <ThemeProvider theme={themes.dark}>
                            <Header />
                        </ThemeProvider>
                    </GlobalContext.Provider>
                );

                const searchButton = screen.queryByRole('button');
                const searchInput = screen.queryByPlaceholderText(/search.../i);
                fireEvent.change(searchInput, { target: { value: newSearchTerm } });
                fireEvent.click(searchButton);

                expect(setVideoId).not.toBeCalled();
            });
        });
    });



    describe('when click on theme toggle', () => {
        test('global dispatch should be called in order to change the theme', () => {
            const setSearchTerm = jest.fn();
            const setVideoId = jest.fn();

            render(
                <GlobalContext.Provider
                    value={{
                        youtubeSearch: { setSearchTerm },
                        youtubeVideo: { setVideoId },
                        globalState,
                        globalDispatch
                    }}
                >
                    <ThemeProvider theme={themes.dark}>
                        <Header />
                    </ThemeProvider>
                </GlobalContext.Provider>
            );

            const themeToggle = screen.queryByRole("switch");
            fireEvent.click(themeToggle);

            expect(globalDispatch).toBeCalledWith({ type: actionTypes.TOGGLE_THEME });
        });
    });
});
