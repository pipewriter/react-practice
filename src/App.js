import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './BudgetBatComponents';

const data = [
  {
    tag: 'pizza',
    price: 3,
    date: 'jun 1',
    id: 1
  },
  {
    tag: 'cake',
    price: 10.11,
    date: 'tuesday',
    id: 2
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Items items={data} />
      </div>
    );
  }
}

export default App;
