import React, { Component } from 'react';
import Events from './Events';
import LocationForm from './LocationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLocationFormSubmit = this.handleLocationFormSubmit.bind(this);
  }

  handleLocationFormSubmit(event) {
    console.log('A location was submitted: ' + this.state.value);
    this.setState({ value: '', events: [{ name: 'Event 1' }, { name: 'Event 2' }] });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <main>
          <section>
            <LocationForm handleSubmit={this.handleLocationFormSubmit} />
          </section>
          <section>
            <Events events={this.state.events || []} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
