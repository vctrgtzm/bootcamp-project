import VideoGrid from '../../components/VideoGrid/VideoGrid';

function MainView() {
    const mockData = require('../../mocks/youtube-videos-mock.json');

    return (
        <div data-testid="view">
            <VideoGrid
                items={mockData.items}
            />
        </div>
    );
}

export default MainView;