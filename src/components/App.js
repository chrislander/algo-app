import React from 'react';
import { bubbleSort } from "../classes/sorting/algoBubbleSort.js"

import { Jumbotron, Container } from 'react-bootstrap';
import Board from './Board';
import Button from './Button'

import { generateArr } from "../classes/arrGenerator.js";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';



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

  handleGenericSort(x) {
    console.log(x)
    console.log(this);
    let arr = generateArr(120);
    let algo = new bubbleSort();
    algo.sort(arr);

    
    console.log(algo.sorted_arr);
    console.log(algo.unsorted_arr);

    this.setState({ arr: algo.sorted_arr})

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
              handleGenericSort = {this.handleGenericSort.bind(this)}                                        
            />

            <Button 
              title="Selection Sort"
              rtype="selectionSort"              
              handleGenericSort = {this.handleGenericSort.bind(this)}      

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
