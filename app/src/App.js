import React, { Component, ReactPropTypes } from 'react';
import './App.css';
import AppRouter from './routes';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <Header/>
        <hr/>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
