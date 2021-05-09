import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "../../config/routes";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={routes.SIGN_IN.path}>
                    <routes.SIGN_IN.component/>
                </Route>
                <Route path={routes.SIGN_UP.path}>
                    <routes.SIGN_UP.component/>
                </Route>
                <Route path={routes.HOME.path}>
                    <routes.HOME.component/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
