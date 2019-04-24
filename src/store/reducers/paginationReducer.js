import { HANDLEPAGECHANGE } from "../actions";

const handlePageChangeReducerState = {
  pageSize: 2,
  currentPage: 1
};

export default (state = handlePageChangeReducerState, action) => {
  switch (action.type) {
    case HANDLEPAGECHANGE:
      return {
        ...state,
        currentPage: action.page
      };

    default:
      return state;
  }
};
