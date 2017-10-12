import React from 'react';

const { Component } = React;

class ZipCodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {zipCode: ''};

    // Explain why these need to be bound:
    // https://facebook.github.io/react/docs/handling-events.html
    // this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit = () => {
    console.log("snakes");
  }

  handleOnChange = (event) => {
    this.setState({zipCode: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
          Zip Code:
          <input
            type="text"
            value={this.state.zipCode}
            onChange={this.handleOnChange} />
        </label>

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default ZipCodeForm;
