import React from 'react';

class Board extends React.Component {



  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      console(prevState);
      // New 'players' array – a copy of the previous `players` state
      //const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      //const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      //updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      //updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        //players: updatedPlayers
      };
    });
  }



  render() {
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

export default Board;
