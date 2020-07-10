import React, { Component } from 'react';

class Button extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <button type="button" class="btn btn-primary">Primary</button>
    );
  }
}

export default AddPlayerForm;
