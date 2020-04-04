import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.css';
// import ComponentAndProps from "./componentAndProps/componentAndProps";
// import StateAndLifecycle from "./stateAndLifecycle/stateAndLifecycle";
// import HandlingEvents from "./handlingEvents/handlingEvents";
// import ConditionalRendering from "./conditionalRendering/conditionalRendering";
import ListAndKeys from "./listAndKeys/listAndKeys";


const App = () => {
  return (
    <div className='App'>
      {/*<ComponentAndProps name='this is props data'/>*/}
      {/*<StateAndLifecycle />*/}
      {/*<HandlingEvents/>*/}
      {/*<ConditionalRendering/>*/}
      <ListAndKeys/>
    </div>
  );
};

// export default hot(module)(App)
export default hot(App);
// export default App;
