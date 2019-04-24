import { combineReducers } from "redux";

import ourData from "./mainJsonReducer";
import ourSort from "./sortDataReducer";
import ourPagination from "./paginationReducer";

const reducer = combineReducers({
  ourData,
  ourSort,
  ourPagination
});

export default reducer;