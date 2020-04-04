import * as React from 'react';

// Components
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
// -------------------------------------

class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }
    return (
      <div>
        <h1>Conditional</h1>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        {/* If Else */}
        {isLoggedIn ? <h2>Login User!</h2> : <h2>Logout!</h2>}

        {/* If (ngIf) */}
        {isLoggedIn && <h2>Show login</h2>}

        {/*If inverse */}
        {isLoggedIn || <h2>Show login</h2>}
      </div>
    );
  }
}

export default ConditionalRendering;
