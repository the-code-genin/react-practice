import { BrowserRouter, Route } from "react-router-dom";
import ABout from "../pages/About";
import Home from "../pages/Home";

export default () => {
    return (
        <BrowserRouter>
            <Route path="/">
                <Home />
            </Route>

            <Route path="/about">
                <ABout />
            </Route>
        </BrowserRouter>
    )
}