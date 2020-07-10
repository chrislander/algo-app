import React from 'react';

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
              <div className="bar" key={i} style={{height:d}}>

              </div>
            ))}
        </div>
      );
    }
  }
}

export default Board;
