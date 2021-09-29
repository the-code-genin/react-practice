import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
    
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        );
    }
}