import { SORT_COMPANY, SORT_BALANCE } from '../actions';

const sortDataReducerState = {
    sortCompany: null,
    sortBalance: null
};

export default (state=sortDataReducerState, action) => {
    switch (action.type) {
  
      case SORT_COMPANY:
        if(state.sortCompany === null) {
          return {
            ...state,
            sortCompany: true,
            sortBalance: null
          }
        }
        else if(state.sortCompany === true) {
          return {
            ...state,
            sortCompany: false,
            sortBalance: null
          }
        }
        else {
          return {
            ...state,
            sortCompany: true,
            sortBalance: null
          }
        }
        
      case SORT_BALANCE:
      if(state.sortBalance === null) {
        return {
          ...state,
          sortBalance: true,
          sortCompany: null
        }
      }
      else if(state.sortBalance === true) {
        return {
          ...state,
          sortBalance: false,
          sortCompany: null
        }
      }
      else {
        return {
          ...state,
          sortBalance: true,
          sortCompany: null
        }
      }
  
      default:
         return state;
    }
};

