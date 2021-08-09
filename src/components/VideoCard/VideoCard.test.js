import { fireEvent, render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';



describe('when clicking a VideoCard', () => {
    test('the videoId should set to the id of the video rendered', () => {
        const mockData = require('../../mocks/youtube-videos-mock.json');
        const videoItem = mockData.items[0];
        const setVideoId = jest.fn();
        render(
            <VideoCard
                thumbnail={videoItem.snippet.thumbnails.default.url}
                title={videoItem.snippet.title}
                description={videoItem.snippet.description}
                videoId={videoItem.id}
                setVideoId={setVideoId}
            />
        );

        const videoCard = screen.queryByRole('listitem');
        fireEvent.click(videoCard);

        expect(setVideoId).toHaveBeenCalledWith(videoItem.id);
    });
});