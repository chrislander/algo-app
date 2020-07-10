import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



//import {  Jumbotron, Container } from 'react-bootstrap';


//import { generateArr } from "./classes/arrGenerator.js";
//import { bubbleSort } from "./classes/sorting/algoBubbleSort.js"




//let sort = new bubbleSort();
//let delayed = sort.doBubbleSort(arr);