import React from 'react';

import Events from '../components/Events';
import EventsSource from '../components/EventsSource';

class FormAndEventsWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: '' };
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  handleSubmit(event) {
    // how to merge current state with event: null? (in order to clear the events section)
    const { value: location } = this.state;
    console.log('A location was submitted: ' + location); // eslint-disable-line no-console

    EventsSource.search(location, events => {
      this.setState({ value: '', events });
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>
              City:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Find free beer" />
          </form>
        </section>
        {this.state.events &&
        <Events events={this.state.events} />}
      </div>
    );
  }
}

export default FormAndEventsWrapper;
