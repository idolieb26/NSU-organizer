import React from 'react';
import Button from "./Login/Button/Button";
import './App.css';

function App() {
  return (
    <div className="App">
        <Button text={"Login With Google"}></Button>
        <Button text={"Login With GitHub"}></Button>
    </div>
  );
}

export default App;
