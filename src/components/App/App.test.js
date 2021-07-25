import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('should render header', () => {
        render(<App />);

        const headerComponent = screen.queryByTestId("header");
        expect(headerComponent).toBeInTheDocument();
      });
      
      test('should render main view', () => {
          render(<App />);

          const mainView = screen.queryByTestId("main-view");
          expect(mainView).toBeInTheDocument();
      });
});