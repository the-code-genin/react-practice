import { BrowserRouter, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export default () => {
    return (
        <BrowserRouter>
            <Route path="/">
                <Home />
            </Route>

            <Route path="/about">
                <About />
            </Route>
        </BrowserRouter>
    )
}