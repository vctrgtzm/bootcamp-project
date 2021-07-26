
function MainView(){
    const mockData = require('../../mocks/youtube-videos-mock.json');

    return <section data-testid="main-view">
        <div>
            {mockData.items.map((item, idx) => {
                return <div key={idx} data-testid="video-container">{item.snippet.title}</div>
            })}
        </div>
    </section>
}

export default MainView;