import moment from "moment";
import { Component } from "react";

export interface Props {
    // Empty
}

export interface State {
    date: moment.Moment
}

export default class Clock extends Component<Props, State> {
    public readonly props: Props;
    public readonly state: State;
    protected interval: NodeJS.Timer | null;

    constructor(props: Props) {
        super(props);

        // Initialize props
        this.props = props;

        // Initialize state
        this.state = {
            date: moment().local()
        }

        // Set interval to null
        this.interval = null;

        // Initialize controller methods
        this.tick = this.tick.bind(this);
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