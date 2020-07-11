import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Board from './Board';
import Button from './Button'

import { generateArr } from "../classes/arrGenerator.js";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

//import { bubbleSort } from "../classes/sorting/algoBubbleSort.js"

class App extends React.Component {
  state = {
    arr : ''
  };


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleClick() {
    let arr = generateArr(120);
    this.setState({ arr:arr });      
  }

  async handleBubbleSort() {
  
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
          
        }
      }
    } while (swapped === true )

  }

  async handleSelectionSort() {

    
    let iarr = this.state.arr;

    for (let i = 0;  i < iarr.length; i++ ) {
      let cur_smallest = iarr[i];
      let cur_smallest_pos = i;

      for (let j = i + 1; j < iarr.length; j++) {

        if (iarr[j] < cur_smallest) {

          cur_smallest = iarr[j]
          cur_smallest_pos = j;
        }
      }
      
      if (iarr[i] > cur_smallest){
        let tmp = iarr[i];
        iarr[i] = cur_smallest;
        iarr[cur_smallest_pos] = tmp;
      }

      await this.sleep(25);
      this.setState({ arr:iarr });
    }

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
              title="Bubble Sort"
              rtype="bubbleSort"
              handleBubbleSort = {this.handleBubbleSort.bind(this)}      
            />

            <Button 
              title="Selection Sort"
              rtype="selectionSort"
              handleSelectionSort = {this.handleSelectionSort.bind(this)}      
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
