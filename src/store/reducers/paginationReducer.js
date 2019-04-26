import { HANDLEPAGECHANGE, PAGINATED_JSON } from "../actions";

const handlePageChangeReducerState = {
  pageSize: 2,
  currentPage: 1,
  paginatedJson: []
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
      }

    default:
      return state;
  }
};
