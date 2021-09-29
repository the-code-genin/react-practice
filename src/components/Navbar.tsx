import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>
            </div>
        );
    }
}