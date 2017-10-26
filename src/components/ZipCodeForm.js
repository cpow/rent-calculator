import React from 'react';

const { Component } = React;

class ZipCodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {zipCode: '', isValid: false};
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
  }

  handleOnChange = (event) => {
    let zipCode = event.target.value;
    this.setState({zipCode});
    this.setState({isValid: this.isValidZipCode(zipCode)});
  }

  isValidZipCode(zipCode) {
    return this.isAllNumbers(zipCode) && zipCode.length === 5
  }

  isAllNumbers(zipCode) {
    for (let character of zipCode) {
      if (!Number.isInteger(Number.parseInt(character, 10))){
        return false;
      }
    }
    return true;
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

        <input
          type="submit"
          value="Submit"
          disabled={!(this.state.isValid)}/>
      </form>
    )
  }
}

export default ZipCodeForm;
