import React from 'react';
import Column from './Column'

class Board extends React.Component {

  render() {
    const arrGenerated = this.props.arr.length;

    if (arrGenerated < 1) {    
      return (
        <div id="lines-container"></div>
      );
    }
   
   
   else {
      return (
        <div id="lines-container">
            {this.props.arr.map((d, i) =>(
              <Column
                key = {i}
                className = "bar"
                height = {d}
            
              />
            ))}
        </div>
      );
    }
  }
}

export default Board;
