import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from "./components/App";
import store from './store/store';

// console.log(store.getState());

// store.subscribe(() => {
//   console.log('store updated', store.getState()); 
// });

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
)