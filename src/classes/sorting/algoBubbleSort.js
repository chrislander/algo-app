 export class bubbleSort {

  constructor(){

    this.title = "Bubble Sort";

  }


  sort(arr){

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
        console.log(arr);
        //Export array to queue with meta data E.g. active index numbers
      }
    }
    while (swapped === true )

    return arr;
  }

}
