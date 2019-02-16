import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from "./components/App";

const store = createStore(
  reducer,
  applyMiddleware(thunk), 
)

// console.log(store.getState()) 
// store.dispatch(fetchPosts());

store.subscribe(() => {
  console.log('store updated', store.getState()); 
});

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
)