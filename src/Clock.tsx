import moment from "moment";
import { Component } from "react";

export interface State {
    date: moment.Moment
}

export default class Clock extends Component {
    public state: State;
    protected interval: NodeJS.Timer | null;

    constructor(props: any) {
        super(props);

        // Initialize state
        this.state = {
            date: moment()
        }

        // Set interval to null
        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        if (this.interval != null) clearInterval(this.interval);
    }

    tick() {
        this.setState((state: State, props: any): Partial<State> => {
            return {
                date: moment()
            }
        });
    }

    render() {
        return (
            <p>Current Date: {this.state.date.format("YYYY-MM-DD HH:MM:ss")}</p>
        );
    }
}