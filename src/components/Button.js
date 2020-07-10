import React, { Component } from 'react';

import { generateArr } from "../classes/arrGenerator.js";

class Button extends Component {


  handleClick = (e) => {
    console.log(generateArr(100));    
  }

  render() {
    return (
      <button onClick={this.handleClick} variant="primary">Primary</button>
    );
  }
}

export default Button;
