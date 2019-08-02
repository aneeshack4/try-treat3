import React from 'react';
import './App.css';
import { Button } from './Button';
import { TreatProvider } from 'react-treat';
import theme from './theme.treat.js';
import { Button2 } from './Button2';

function App() {
  return (
    <div className="App">
      <Button text="hello world"></Button>
      {/* <Button2>outside treat provider</Button2> */}
      <TreatProvider theme={theme}><Button2>HAII</Button2></TreatProvider>
    </div>
  );
}

export default App;
