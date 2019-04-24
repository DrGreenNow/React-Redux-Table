import { ON_SORT } from "../actions";

const sortDataReducerState = {
  sortColumn: { path: "title", order: "asc" }
};

export default (state = sortDataReducerState, action) => {
  switch (action.type) {
    case ON_SORT:
      const tempSortColumn = state.sortColumn;
      if (tempSortColumn.path === action.path)
        tempSortColumn.order = tempSortColumn.order === "asc" ? "desc" : "asc";
      else {
        tempSortColumn.path = action.path;
        tempSortColumn.order = "asc";
      }
      return {
        ...state,
        sortColumn: { ...state.sortColumn, ...tempSortColumn }
      };

    default:
      return state;
  }
};
