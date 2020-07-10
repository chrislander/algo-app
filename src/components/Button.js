import React, { Component } from 'react';

//import { generateArr } from "../classes/arrGenerator.js";

class Button extends Component {

 

  render() {
    const rtype = this.props.rtype;

    if (rtype === 'createArray'){
        return (
          <button onClick={this.props.handleClick} className="btn btn-primary" variant="primary">{this.props.title}</button>      
        );
    }

    if (rtype === 'sortArray'){
      return (
        <button onClick={this.props.handleArr} className="btn btn-secondary" variant="secondary">{this.props.title}</button>      
      );
    }    
  }
}

export default Button;
