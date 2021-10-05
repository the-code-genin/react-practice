import React from "react";
import { RouteComponentProps } from "react-router";
import Navbar from "../components/Navbar";
import movies from "../assets/movies.json";

export interface RouteParams {
    movie: string,
    [k: string]: string | undefined
}

export type Props = RouteComponentProps<RouteParams>;

export interface MovieData {
    slug: string,
    name: string,
    description: string
}

export default class Movie extends React.Component {
    public readonly props: Props;
    protected readonly slug: string;
    protected readonly movieData: MovieData | undefined;

    constructor(props: Props) {
        super(props);

        this.props = props;

        this.slug = this.props.match.params.movie;

        const movie = movies.find(movie => movie.slug === this.slug);
        this.movieData = movie;
    }

    componentDidMount() {
        if (this.movieData == null) {
            window.location.href = "/404";
            return;
        }
    }

    render() {
        const movieData = this.movieData as MovieData;

        return (
            <div className="container">
                <Navbar />
                <h1>{movieData.name}</h1>
                <p>{movieData.description}</p>
            </div>
        );
    }
}