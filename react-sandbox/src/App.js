import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';


const App = () => {

  return (
    <div className='App'>
      <Welcome name='Component 1'/>
      <Welcome name='Component 2'/>
      <Welcome name='Component 3'/>
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
