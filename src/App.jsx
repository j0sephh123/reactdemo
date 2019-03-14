import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Heroes from './components/Heroes';
import AddHero from './components/AddHero';
import store from './store';
// https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
{/* <i class="fas fa-igloo fa-xs"></i>
<i class="fas fa-igloo fa-sm"></i>
<i class="fas fa-igloo fa-lg"></i>
<i class="fas fa-igloo fa-2x"></i>
<i class="fas fa-igloo fa-10x"></i> */}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <i className="fab fa-amazon fa-10x"></i>
        <AddHero />
        <Heroes />
      </Provider>
    );
  }
}

export default App;