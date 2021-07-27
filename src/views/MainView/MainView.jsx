import VideoGrid from '../../components/VideoGrid/VideoGrid';

function MainView() {
    const mockData = require('../../mocks/youtube-videos-mock.json');

    return (
        <div role="main">
            <VideoGrid
                items={mockData.items}
            />
        </div>
    );
}

export default MainView;