import React from 'react';
import './App.css';
import ComponentAndProps from "./componentAndProps/componentAndProps";
import StateAndLifecycle from "./stateAndLifecycle/stateAndLifecycle";
import HandlingEvents from "./handlingEvents/handlingEvents";


const App = () => {
  return (
    <div className='App'>
      {/*<ComponentAndProps name='this is props data'/>*/}
      {/*<StateAndLifecycle />*/}
      <HandlingEvents/>
    </div>
  );
};

export default App;

/*
* Create elements:
*  const element1 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );

  const element2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

* */


/*
<header className='App-header'>
  <img src={logo} className='App-logo' alt='logo'/>
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className='App-link'
    href='https://reactjs.org'
    target='_blank'
    rel='noopener noreferrer'
  >
    Learn React
  </a>

</header>*/
