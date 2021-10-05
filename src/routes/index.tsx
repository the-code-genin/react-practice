import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import NotFound from "../pages/NotFound";

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/about" component={About} />

                <Route path="/movies/:movie" component={Movie} />

                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}