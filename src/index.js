import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import toyReducer from './redux/toyReducer'
import { Provider } from "react-redux";
import thunk from "redux-thunk";


const toyStore = createStore(
  toyReducer, applyMiddleware(thunk)
);

// console.log(toyStore)

ReactDOM.render(
  <Provider store={toyStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
