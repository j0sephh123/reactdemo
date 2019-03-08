import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Heroes from './components/Heroes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Heroes />
      </Provider>
    );
  }
}

export default App;