import * as React from 'react';
import Clock from "./clock";

class StateAndLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isShow: false});
      setTimeout(() => {
        this.setState({isShow: true});
      }, 3000)
    }, 3000)
  }

  render() {
    return (
      <div>
        {this.state.isShow ? <Clock/> : ''}
      </div>
    );
  }
}

export default StateAndLifecycle;
