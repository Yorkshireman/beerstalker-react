import React, { Component } from 'react';
import FormAndEventsWrapper from './containers/FormAndEventsWrapper';
import './containers/styles/FormAndEventsWrapper.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>BeerStalker</header>
        <main>
          <FormAndEventsWrapper />
        </main>
      </div>
    );
  }
}

export default App;
