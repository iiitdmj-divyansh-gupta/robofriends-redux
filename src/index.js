import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers.js';
import reportWebVitals from './reportWebVitals';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import App from './containers/App';


const logger = createLogger();

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))// applyMiddleware is ordered, i.e., it will go through thunkMiddleware first


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

*/

// if we had multiple exports from robots -> import {robots, another} from './robots'

/*
https://www.udemy.com/course/python-for-machine-learning-data-science-masterclass/
*/