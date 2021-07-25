

function Header() {
    const logo = require('../../logo.png');
    return (
        <header data-testid="header">
            <img data-testid="hd-logo" alt="the icon of the app" src={logo}></img>
            <nav data-testid="hd-nav-var">
                <ul>
                    <li>Home</li>
                    <li>Favorites</li>
                </ul>
            </nav>
            <input data-testid="hd-search-input" type="text" placeholder="Search..." />
            <input data-testid="hd-theme-toggle" type="checkbox" />
            <div data-testid="hd-avatar"></div>
        </header>
    );

}

export default Header;