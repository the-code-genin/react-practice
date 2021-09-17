import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Clock from './components/Clock';
import LikeBar from './components/LikeBar';

export interface Props {
  appName?: string
};

export default class App extends Component {
  public props: Props;

  constructor(props: Props) {
    super(props);

    // Initialize props
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.appName}</p>

          <Clock />

          <LikeBar />
        </header>
      </div>
    );
  }
}