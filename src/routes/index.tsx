import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>

            <Route path="/about">
                <About />
            </Route>
        </Switch>
    )
};

export default Routes;