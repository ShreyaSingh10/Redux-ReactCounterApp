import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';
//6. use provide or import store to pass down the component
//to all child components
import store from './store/';

class App extends Component {
//1. make parent component
  render() {
    return (
      <div className="App">
        <Counter store={store}/>
      </div>
    );
  }
}

export default App;

// <Counter store={store}/> - hooks store to component