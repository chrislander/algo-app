import React, { Component } from 'react';

class Button extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    //this.props.addPlayer(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <button variant="primary">Primary</button>
    );
  }
}

export default Button;
