import React from "react";
import "../assets/css/style.css";
import Navbar from "../components/Navbar";
import movies from "../assets/movies.json";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  buildMovies() {
    return movies.map((movie, index) => {
      const link = `/movies/${movie.slug}`;
      return (
        <Link key={index} to={link}>
          <h1>{movie.name}</h1>
          <p>{movie.description}</p>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Navbar/>

        <h1>Home Page</h1>

        <div>
          {this.buildMovies()}
        </div>
      </div>
    );
  }
}