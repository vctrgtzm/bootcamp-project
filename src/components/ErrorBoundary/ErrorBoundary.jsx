
import React from 'react';
import { ErrorContainer } from '../App/App.styled';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <h1>Something went wrong. Please refresh the app and try again.</h1>
                </ErrorContainer>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
