import React from "react"

type DateTime = {
    date: Date
}

class Clock extends React.Component {
    state: Readonly<{date: Date}>;
    timerID!: NodeJS.Timer;
    constructor(props: DateTime) {
        super(props);
        this.state = {date: new Date()}
    }

    tick() {
        this.setState({date: new Date()})
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <h1>It is {this.state.date.toLocaleTimeString()}</h1>
        )
    }
}

export default Clock