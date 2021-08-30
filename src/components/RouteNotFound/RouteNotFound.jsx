import { ErrorContainer } from "../App/App.styled";

function RouteNotFound() {
    return (
        <ErrorContainer>
            <h1>404 The route was not found, please try a valid route</h1>
        </ErrorContainer>
    );
}

export default RouteNotFound;
