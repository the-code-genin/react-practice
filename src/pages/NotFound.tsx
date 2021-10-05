import React from "react";
import "../assets/css/style.css";
import Navbar from "../components/Navbar";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <h1>404 - Not Found</h1>
      </div>
    );
  }
}