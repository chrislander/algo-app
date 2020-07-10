import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Board from './Board';
import Button from './Button'

import { generateArr } from "../classes/arrGenerator.js";

import { bubbleSort } from "../classes/sorting/algoBubbleSort.js"









//let arr = generateArr(100);

//console.log(arr);
class App extends React.Component {
  state = {
    arr : generateArr(100)
  };

  render() {
    return (
      <Container >
        <Jumbotron>
          <div>
            The App

            <Button
              variant="primary"
              onClick={console.log('')}
            />

            <Board
              title="Scoreboard"
              arr = {this.state.arr}
            />
          </div>
        </Jumbotron>
      </ Container>
    );
  }
}





export default App;
