import React from 'react';
import Board from '../../components/Board';


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

   doBubbleSort(arr) {

    //const BG_COLOR = 'blue'
   //const COMPARE_COLOR = 'yellow'
   //const FOUND_COLOR = 'green'
   //const SELECT_COLOR = 'red'

      let animationArr = this.sort(arr);
      console.log(animationArr);

      let previous

      for (let i = 0; i < animationArr.length; ++i) {
          //await sleep(300)
          //Board.render();
          const animation = animationArr[i]

          //Board.handleScoreChange(animation);

          if (animation.status === 'compare') {
              //lineContainerChildElements[animation.posI].style.backgroundColor = COMPARE_COLOR
              //lineContainerChildElements[animation.posJ].style.backgroundColor = COMPARE_COLOR
          } else {
              //lineContainerChildElements[animation.posI].style.backgroundColor = SELECT_COLOR
              //lineContainerChildElements[animation.posJ].style.backgroundColor = SELECT_COLOR


              //await sleep(300)
              //const tempHeight = lineContainerChildElements[animation.posI].style.height
              //lineContainerChildElements[animation.posI].style.height = lineContainerChildElements[animation.posJ].style.height
              //lineContainerChildElements[animation.posJ].style.height = tempHeight
          }

      }


      return animationArr;
  }

}
