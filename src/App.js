import React from 'react';
import {  Jumbotron, Container } from 'react-bootstrap';

import { generateArr } from "./classes/arrGenerator.js";
import { bubbleSort } from "./classes/sorting/algoBubbleSort.js"

//const bubbleSort = require("./classes/sorting/algoBubbleSort");

let arr = generateArr(100);
console.log(arr);

let sort = new bubbleSort().sort(arr);
console.log(arr);

function App() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Algo App</h1>
          <p>This is an algorithm visualiser</p>
        </Container>
      </Jumbotron>
    </div>

  );
}

export default App;
