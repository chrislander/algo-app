import React from 'react';
import Board from '../../components/Board';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

console.log(Board);


 export class bubbleSort {

  constructor(){

    this.title = "Bubble Sort";
    this.unsorted_arr = [];
    this.sorted_arr =  [];
    this.transformations = [];
    this.total_operations = 0;
  }

  sort(arr){

    this.unsorted_arr = arr.slice();
    let swapped;
    
    do {
      swapped = false;
      
      for (let i = 0; i < arr.length; i++ ){

        if(arr[i] > arr[i + 1]){                    
          let tmp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = tmp;
          swapped = true;                  
        }
      }
    } while (swapped === true )

    this.sorted_arr = arr;

  }

}
