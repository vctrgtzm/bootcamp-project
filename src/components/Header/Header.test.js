import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('should render logo', () => {
        render(<Header />);

        const logo = screen.queryByRole("img");
        expect(logo).toBeInTheDocument();
    });

    test('should render navigation bar', () => {
        render(<Header />);

        const navBar = screen.queryByRole("navigation");
        expect(navBar).toBeInTheDocument();
    });

    test('should render search input', () => {
        render(<Header />);

        const searchInput = screen.queryByRole("search");
        expect(searchInput).toBeInTheDocument();
    });

    test('should render theme toggle', () => {
        render(<Header />);

        const themeToggle = screen.queryByRole("switch");
        expect(themeToggle).toBeInTheDocument();
    });

    test('should render avatar', () => {
        render(<Header />);

        const avatar = screen.queryByRole("figure");
        expect(avatar).toBeInTheDocument();
    })

});