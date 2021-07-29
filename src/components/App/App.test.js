import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('should render header', () => {
        render(<App />);

        const headerComponent = screen.queryByTestId("header");
        expect(headerComponent).toBeInTheDocument();
    });

    //TEST NOT WORKING WITH HEADER BY ROLE, TODO: FIND OUT WHY

    // test('should render the header', () => {
    //     render(<App />);

    //     const headerComponent = screen.queryByRole("heading");
    //     expect(headerComponent).toBeInTheDocument();
    // });

    test.todo('should render the header: query using role="navigation" check why it does not work' );

    test('should render a view', () => {
        render(<App />);

        const view = screen.queryByRole("main");
        expect(view).toBeInTheDocument();
    });
});
