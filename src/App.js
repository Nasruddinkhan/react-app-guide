import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /*return (
    <div className="App">
      <h1>Hi Nasruddin, <br/> This is your first react App </h1>
    </div>
  );*/
  return React.createElement('div', {className : 'App'},  React.createElement('h1', null, 'Hi', '\ Nasruddin, <br/> This is your first react App '));
}

export default App;
