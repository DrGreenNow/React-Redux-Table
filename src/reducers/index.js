import { combineReducers } from 'redux';

import ourData from './mainJsonReducer';
import ourSort from './sortDataReducer';


const reducer = combineReducers({
  ourData,
  ourSort
});

export default reducer;