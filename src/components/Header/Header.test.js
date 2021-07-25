import { queryByTestId, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('should render icon', () => {
        render(<Header />);

        const icon = screen.queryByTestId("hd-icon");
        expect(icon).toBeInTheDocument();
    });

    test('should render navigation bar', () => {
        render(<Header />);

        const navBar = screen.queryByTestId("hd-nav-var")
        expect(navBar).toBeInTheDocument();
    });

    test('should render theme toggle', () => {
        render(<Header/>);

        const themeToggle = screen.queryByTestId("hd-theme-toggle");
        expect(themeToggle).toBeInTheDocument();
    });

    test('should render avatar', () => {
        render(<Header/>);

        const avatar = screen.queryByTestId("hd-avatar");
        expect(avatar).toBeInTheDocument();
    })

});