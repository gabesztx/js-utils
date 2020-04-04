import * as React from 'react';

class HandlingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    // this.onHandleClick = this.handleClick.bind(this);
  }

  // handleClick() {}
  handleClick = () => {
    this.setState({isToggleOn: !this.state.isToggleOn})
  };

  render() {
    return (
      <div>
        <h1>Event Handling</h1>
        <button onClick={this.handleClick}>Toggle</button>
        <h2>Toggle: {this.state.isToggleOn.toString()}</h2>
      </div>
    );
  }
}

export default HandlingEvents;
