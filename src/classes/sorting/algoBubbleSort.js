import React from 'react';
import Board from '../../components/Board';

console.log(Board);


 export class bubbleSort {

  constructor(){

    this.title = "Bubble Sort";
    this.steps = [];

  }

  sort(arr){
    console.log('in');
    let animationArr = [];

    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++ ){


        animationArr.push({
          posI: i,
          posJ: i + 1,
          status : 'compare'
        })
        if(arr[i] > arr[i + 1]){
          animationArr.push({
            posI: i,
            posJ: i + 1,
            status : 'swap'
          })

          let tmp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = tmp;
          swapped = true;
        }
        this.steps.push(arr);
        //Export array to queue with meta data E.g. active index numbers
      }
    } while (swapped === true )

    return animationArr;
  }

}
