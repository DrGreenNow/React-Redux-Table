export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const FAILURE_DATA = "FAILURE_DATA";
export const SEARCH = "SEARCH";
export const HANDLEPAGECHANGE = "HANDLEPAGECHANGE";
export const ON_SORT = "ON_SORT";
export const PAGINATED_JSON = "PAGINATED_JSON";

export const requestData = () => ({
  type: REQUEST_DATA
});

export const receivedData = json => ({
  type: RECEIVE_DATA,
  json
});

export const failureData = error => ({
  type: FAILURE_DATA,
  error
});

export const search = value => ({
  type: SEARCH,
  value
});

export const handlePageChange = page => ({
  type: HANDLEPAGECHANGE,
  page
});

export const onSort = path => ({
  type: ON_SORT,
  path
});

export const paginatedJson = paginatedJson => ({
  type: PAGINATED_JSON,
  paginatedJson
});

export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestData());
    return fetch(
      `http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2`
    )
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        dispatch(receivedData(json));
      });
  };
};
