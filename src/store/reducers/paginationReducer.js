import { HANDLEPAGECHANGE, PAGINATED_JSON, SEARCH } from "../actions";

const handlePageChangeReducerState = {
  pageSize: 2,
  currentPage: 1,
  paginatedJson: [],
  searchValue: ""
};

export default (state = handlePageChangeReducerState, action) => {
  switch (action.type) {
    case HANDLEPAGECHANGE:
      return {
        ...state,
        currentPage: action.page
      };

    case PAGINATED_JSON:
      return {
        ...state,
        paginatedJson: action.paginatedJson
      };

    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
        currentPage: 1
      };

    default:
      return state;
  }
};
