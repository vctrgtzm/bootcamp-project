import { render, screen } from "@testing-library/react";
import Home from "./Home";


describe('Home', () => {
    describe('when fetching data', () => {
        test('loading indicator should be rendered', () => {
            render(<Home
                searchIsLoading={true}
                searchResult={null}
                searchError={null}
                setVideoId={jest.fn()}
            />);

            const loadingIndicator = screen.queryByRole('progressbar');
            expect(loadingIndicator).toBeInTheDocument();
        });
    });

    describe('when data has been fetched', () => {
        test('all the items should be rendered', () => {
            const mockSearchResult = require('../../mocks/youtube-videos-mock.json');

            render(<Home
                searchIsLoading={false}
                searchResult={mockSearchResult}
                searchError={null}
                setVideoId={jest.fn()}
            />);

            const videoItems = screen.queryAllByRole('listitem');
            expect(videoItems).toHaveLength(mockSearchResult.items.length);
        });
    });

    describe('when an error ocurred during fetching', () => {
        test('the error message should be rendered', () => {
            render(<Home
                searchIsLoading={false}
                searchResult={null}
                searchError={'Error fetching'}
                setVideoId={jest.fn()}
            />);

            const errorMessage = screen.queryByText('Something went wrong when fetching data from youtube API :(');
            expect(errorMessage).toBeInTheDocument();
        })
    });
});
