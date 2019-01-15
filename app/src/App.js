import React, { Component } from 'react';
import './App.css';
import AppRouter from './routes';
import Header from './Header';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadCats} from './actions/catActions';

const store = configureStore();
store.dispatch(loadCats());

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <Header/>
        <hr/>
          <Provider store={store}>
            <AppRouter/>
          </Provider>
      </div>
    );
  }
}

export default App;
