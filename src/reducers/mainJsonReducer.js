import { REQUEST_DATA, RECEIVE_DATA, FAILURE_DATA, SEARCH } from '../actions';

const initialReducerState = {
    json: [],
    loading: false,
    error: null,
    action: ''
 };

 export default (state=initialReducerState, action) => {
    switch (action.type) {
      case REQUEST_DATA:
        return { 
          ...state, 
          loading: true,
          error: null
        };
  
      case RECEIVE_DATA:
        return {
          ...state,
          loading: false, 
          json: action.json
        };
  
      case FAILURE_DATA:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          json: []
        } 

      case SEARCH:
        return {
          ...state,
          action: action.value
        }
  
      default:
         return state;
    }
};
