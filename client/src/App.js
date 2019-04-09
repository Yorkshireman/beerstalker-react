import React, { Component } from 'react';
import FormAndEventsWrapper from './FormAndEventsWrapper';

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
