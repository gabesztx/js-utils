import * as React from 'react';

/* Component - Class */
/*class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}*/

/* Component - Function */
const Welcome = props => {
  return <h1>Hello, {props.name}</h1>;
};

export default Welcome;
