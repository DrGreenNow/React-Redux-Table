import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import store from './store/store';
import './index.css';

// console.log(store.getState());

store.subscribe(() => {
  console.log('store updated', store.getState()); 
});

ReactDOM.render(
  <Provider store={store}>
	  <App />
  </Provider>,
  document.getElementById('root')
)