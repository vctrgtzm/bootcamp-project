import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalContext from '../../state/context';
import Header from './Header';
import { themes } from '../../state/themes';

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

    test('should trigger an api call to search on enter pressed on search input', () => {
        const setSearchTerm = jest.fn();
        const setVideoId = jest.fn();

        const newSearchTerm = 'react tutorials';

        render(
            <GlobalContext.Provider
                value={{
                    youtubeSearch: { setSearchTerm },
                    youtubeVideo: { setVideoId }
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
        expect(setVideoId).toBeCalledWith(null);

    });

    test('should trigger an api call to search when search button is clicked', () => {
        const setSearchTerm = jest.fn();
        const setVideoId = jest.fn();

        const newSearchTerm = 'react tutorials';

        render(
            <GlobalContext.Provider
                value={{
                    youtubeSearch: { setSearchTerm },
                    youtubeVideo: { setVideoId }
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
        expect(setVideoId).toBeCalledWith(null);
    });
});
