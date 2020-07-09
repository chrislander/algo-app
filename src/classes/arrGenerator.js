export function generateArr(arrLength){
  let arr = [];

  for (let i = 0; i < arrLength ; i++){
    console.log(i);
      arr.push(Math.floor((Math.random() * 100 ) + 1));
  }
  return arr;
}
