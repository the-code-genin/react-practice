import moment from "moment";
import { Component } from "react";

interface State {
    date: moment.Moment
}

export default class Clock extends Component {
    public state: State;
    protected interval: NodeJS.Timer | null;

    constructor(props: any) {
        super(props);

        // Initialize state
        this.state = {
            date: moment().local()
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
        this.setState({
            date: moment().local()
        });
    }

    render() {
        return (
            <p>Current Date: {this.state.date.format("YYYY-MM-DD HH:mm:ss")}</p>
        );
    }
}