import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('should render header', () => {
        render(<App />);

        const headerComponent = screen.queryByTestId("header");
        expect(headerComponent).toBeInTheDocument();
    });

    test('should render the header', () => {
        render(<App />);

        const headerComponent = screen.queryByRole("banner");
        expect(headerComponent).toBeInTheDocument();
    });

    test.todo('should render a view');
});
