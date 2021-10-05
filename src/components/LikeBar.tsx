import { Component } from "react";
import "../assets/css/style.css";

export interface Props {
    // Empty
};

interface State {
    likes: number,
    myAction: "like" | "dislike" | null
};

export default class LikeBar extends Component<Props, State> {
    public readonly props: Props;
    public readonly state: State;

    constructor(props: Props) {
        super(props);

        // Initialize props
        this.props = props;

        // Initialize state
        this.state = {
            likes: 0,
            myAction: null
        };

        // Initialize controller methods
        this.doLike = this.doLike.bind(this);
        this.doDislike = this.doDislike.bind(this);
    }

    doLike() {
        if (this.state.myAction === "like") {
            this.setState((state, props) => {
                return {
                    myAction: null,
                    likes: state.likes - 1
                }
            });
        } else if (this.state.myAction === "dislike") {
            this.setState((state, props) => {
                return {
                    myAction: "like",
                    likes: state.likes + 2
                }
            });
        } else {
            this.setState((state, props) => {
                return {
                    myAction: "like",
                    likes: state.likes + 1
                }
            });
        }
    }

    doDislike() {
        if (this.state.myAction === "dislike") {
            this.setState((state, props) => {
                return {
                    myAction: null,
                    likes: state.likes + 1
                }
            });
        } else if (this.state.myAction === "like") {
            this.setState((state, props) => {
                return {
                    myAction: "dislike",
                    likes: state.likes - 2
                }
            });
        } else {
            this.setState((state, props) => {
                return {
                    myAction: "dislike",
                    likes: state.likes - 1
                }
            });
        }
    }

    render() {
        return (
            <div className="d-flex align-items-center">
                <button
                    onClick={this.doLike}
                    className={this.state.myAction === "like" ? "active green" : ""}
                >
                    {this.state.myAction === "like" ? "Liked" : "Like"}
                </button>

                <span className="mx-3">{this.state.likes}</span>

                <button
                    onClick={this.doDislike}
                    className={this.state.myAction === "dislike" ? "active red" : ""}
                >
                    {this.state.myAction === "dislike" ? "Disliked" : "Dislike"}
                </button>
            </div>
        )
    }
}