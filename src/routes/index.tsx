import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export default () => {
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
}