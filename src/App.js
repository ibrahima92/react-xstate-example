import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import './App.css';


const changeTheme = Machine({
  id: 'theme',
  initial: 'dark',
  states: {
    dark: {
      on: { CHANGE: 'light' }
    },
    light: {
      on: { CHANGE: 'dark' }
    }
  }
})


function App() {
  const [current, send] = useMachine(changeTheme);
 
  return (
    <div className="App">
      <h1>{current.matches('dark') ? 'Dark Theme' : 'Light Theme'}</h1>
      <button onClick={() => send('CHANGE')}>Change Theme</button>
    </div>
  );
}

export default App;
