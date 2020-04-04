import * as React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    // HTTP Request here
    console.log('componentDidMount');
    // Update component state
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Clock: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
