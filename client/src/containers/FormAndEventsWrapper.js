import React from 'react';

import Events from '../components/Events';
import EventsSource from '../components/EventsSource';

class FormAndEventsWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = { value: '',
                   selection: 'beer'
                 };
  }

  handleSelection(event) {
    this.setState({ selection: event.target.value })
  }

  handleChange({ target: { value } }) {    
    this.setState({ value });
  }

  handleSubmit(event) {
    // how to merge current state with event: null? (in order to clear the events section)
    const { value: location, selection: choice } = this.state;
    console.log('A location was submitted: ' + location); // eslint-disable-line no-console

    EventsSource.search(location, choice, events => {
      console.log(events);
      
      this.setState({ value: '', events });
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="formWrapper">
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>
              City:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <select value={this.state.selection} onChange={this.handleSelection}>
              <option value="beer">Beer</option>
              <option value="pizza">Pizza</option>
            </select>
            <input className="input" type="submit" value="Find free event" />
          </form>
        </section>
        {this.state.events &&
        <Events events={this.state.events} />}
      </div>
    );
  }
}

export default FormAndEventsWrapper;
