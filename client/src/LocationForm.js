import React from 'react';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          City:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Find free beer" />
      </form>
    );
  }
}

export default LocationForm;
