import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Board from './Board';

import { generateArr } from "../classes/arrGenerator.js";

import { bubbleSort } from "../classes/sorting/algoBubbleSort.js"







let arr = generateArr(100);

let sort = new bubbleSort();
//sort.doBubbleSort();



console.log(arr);
class App extends React.Component {
  state = {
    arr
  };

  render() {
    return (
      <Container >
        <Jumbotron>
          <div>
            The App

            <Board
              title="Scoreboard"
              arr={this.state.arr}
            />
          </div>
        </Jumbotron>
      </ Container>
    );
  }
}





export default App;
