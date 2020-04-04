import * as React from 'react';

class HandlingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      number: 0
    };
    this.onHandleClick = this.handleClick.bind(this);
    this.onHandleClickArg = this.handleClickArg.bind(this);
  }

  handleClick() {
    console.log('handleClick');
    this.setState({isToggleOn: !this.state.isToggleOn})
  }


  handleClickArg(randomNumber) {
    console.log('handleClickWithArg');
    this.setState({number: randomNumber})
  }

  render() {
    this.randomNumber = Math.random() * 1000;
    console.log('Render');
    return (
      <div>
        <h1>Event Handling</h1>
        <button onClick={this.onHandleClick}>Toggle</button>
        <h2>Toggle: {this.state.isToggleOn.toString()} / {this.state.isToggleOn ? 'ON' : 'OFF'}</h2>
        {/*<button onClick={this.onHandleClickArg(this.randomNumber)}>ClickWithArg</button>*/}
        {/*<h2>Random Number: {this.randomNumber.toString()}</h2>*/}
      </div>
    );
  }
}

export default HandlingEvents;
