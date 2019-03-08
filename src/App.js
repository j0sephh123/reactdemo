import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Map} from 'immutable';

class App extends Component {
  render() {
    

    // console.log(modifiedHero.getIn())

    return (
      <Provider store={store}>
          <div className="App">
            Hello from App.js
          </div>
      </Provider>
    );
  }
}

export default App;