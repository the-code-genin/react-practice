import React from "react";
import "../assets/css/style.css";

export interface Props {
  // Empty
}

export interface State {
  // Empty
}

export default class ABout extends React.Component {
  public props: Readonly<Props>;
  public state: Readonly<State>;

  constructor(props: Props) {
    super(props);

    this.props = props;

    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <h1>About</h1>
      </div>
    );
  }
}