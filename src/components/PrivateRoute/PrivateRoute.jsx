import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import GlobalContext from "../../state/context";

function PrivateRoute({ path, children }) {
    const { globalState: { user } } = useContext(GlobalContext);

    if (!user) {
        return <Redirect to={{
            pathname: '/',
            state: { showLogin: true }
        }} />
    }

    return (
        <Route path={path}>
            {children}
        </Route>
    );
}

export default PrivateRoute;
