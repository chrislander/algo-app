export function generateArr(arrLength){
  let arr = [];

  for (let i = 0; i < arrLength ; i++){
      arr.push(Math.floor((Math.random() *250 ) + 1));
  }
  return arr;
}
