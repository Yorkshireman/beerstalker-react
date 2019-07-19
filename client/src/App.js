import React, { Component } from 'react';
import FormAndEventsWrapper from './containers/FormAndEventsWrapper';

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
