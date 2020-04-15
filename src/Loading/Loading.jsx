import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dot: "."
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        if (this.state.dot.length < 4) {
            this.setState({
                dot: "." + this.state.dot
            });
        } else {
            this.setState({
                dot: "."
            });
        }

    }
    render() {
        return (
            <div>
                <h1>LOAD {this.state.dot}</h1>
            </div>
        );
    }
}

export default Loading;
