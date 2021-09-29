import React from "react";
import logo from "../logo.svg";
import Clock from "../components/Clock";

export interface Props {
  // Empty
}

export interface State {
  // Empty
}

export default class Home extends React.Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My React App</p>

          <Clock />
        </header>
      </div>
    );
  }
}