import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Board from './Board';
import Button from './Button'

import { generateArr } from "../classes/arrGenerator.js";

//import { bubbleSort } from "../classes/sorting/algoBubbleSort.js"

class App extends React.Component {
  state = {
    arr : ''
  };


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleClick() {
    let arr = generateArr(100);
    this.setState({ arr:arr });      
  }

  async handleArr() {
  
    console.log(this.state.arr)

    let swapped;
    let iarr = this.state.arr;
    
    do {
      swapped = false;
      for (let i = 0; i < iarr.length; i++ ){

        if(iarr[i] > iarr[i + 1]){
          await this.sleep(25)
          let tmp = iarr[i + 1];
          iarr[i + 1] = iarr[i];
          iarr[i] = tmp;
          swapped = true;
          this.setState({ arr:iarr });  
          console.log('redrawn');
  
        }
      }
    } while (swapped === true )

  }

  render() {
    return (
      <Container >
        <Jumbotron>
          <div>
            <h3>The App</h3>

            <Button
              title="Create Array"
              rtype="createArray"
              handleClick = {this.handleClick.bind(this)}              
            />

            <Button 
              title="BubbleSort"
              rtype="sortArray"
              handleArr = {this.handleArr.bind(this)}      
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
