import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Heroes from './components/Heroes';
import AddHero from './components/AddHero';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>automatic deployment with github</h1>
        <AddHero />
        <Heroes />
      </Provider>
    );
  }
}

export default App;