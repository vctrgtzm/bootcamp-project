import { render, screen } from "@testing-library/react";
import MainView from '/MainView';

describe('MainView', () => {
    test('should render all of the videos contained in mock', () => {
        const mockData = require('../../mocks/youtube-videos-mock.json');
        render(<MainView />);

        const renderedVideos = screen.queryAllByTestId("video-container");
        expect(renderedVideos.length).toBe(mockData.length);

    });
});