import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders header', () => {
        render(<App />);

        const headerComponent = screen.queryByTestId("header");
        expect(headerComponent).toBeInTheDocument();
      });
      
      test('renders main view', () => {
          render(<App />);

          const mainView = screen.queryByTestId("main-view");
          expect(mainView).toBeInTheDocument();
      });
});