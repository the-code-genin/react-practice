import React from "react";
import "../assets/css/style.css";
import Navbar from "../components/Navbar";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <h1>Hello World</h1>
      </div>
    );
  }
}