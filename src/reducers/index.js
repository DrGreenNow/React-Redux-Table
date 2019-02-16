import { REQUEST_DATA, RECEIVE_DATA, FAILURE_DATA, SORT_COMPANY } from '../actions';

const initialState = {
   json: [],
   loading: false,
   error: null,
   sortCompany: null,
	 sortBalance: null
};

const reducer = (state=initialState, action) => {
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

    case SORT_COMPANY:
      if(state.sortCompany === null) {
        return {
          ...state,
          sortCompany: true
        }
      }
      else if(state.sortCompany === true) {
        return {
          ...state,
          sortCompany: false,
          // json: state.json.sort( (a,b) => {
          //   if (a.company.toLowerCase() < b.company.toLowerCase()) {
          //       return 1;
          //   } else {
          //       return -1;
          //   }
          // })
        }
      }
      else {
        return {
          ...state,
          sortCompany: true
        }
      }
      
    default:
       return state;
  }
};
export default reducer;