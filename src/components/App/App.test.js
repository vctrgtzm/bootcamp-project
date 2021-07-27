import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('should render header', () => {
        render(<App />);

        const headerComponent = screen.queryByTestId("header");
        expect(headerComponent).toBeInTheDocument();
      });
      
      test('should render a view', () => {
          render(<App />);

          const view = screen.queryByTestId("view");
          expect(view).toBeInTheDocument();
      });
});