import VideoGrid from '../../components/VideoGrid/VideoGrid';

function MainView() {
    const mockData = require('../../mocks/youtube-videos-mock.json');

    return (
        <VideoGrid
            items={mockData.items}
        />
    );
}

export default MainView;