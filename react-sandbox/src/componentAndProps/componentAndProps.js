import * as React from 'react';

/* Component - Class */
class ComponentAndProps extends React.Component {
  render() {
    return <div>
      <h1>Component And Props</h1>
      <div>props: {this.props.name}</div>
    </div>;
  }
}

/* Component - Function */
/*const ComponentAndProps = props => {
  return <div>
    <h1>Component And Props</h1>
    <div>props: {props.name}</div>
  </div>;
};*/

export default ComponentAndProps;
