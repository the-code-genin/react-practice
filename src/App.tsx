import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";

export interface Props {
  //
};

export interface State {
  //
};

export default class App extends Component {
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
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}