import React from "react";
import "../assets/css/style.css";
import Navbar from "../components/Navbar";

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <h1>About</h1>
      </div>
    );
  }
}