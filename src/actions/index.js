export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const FAILURE_DATA = 'FAILURE_DATA';
export const SORT_COMPANY = 'SORT_NAME';
export const SORT_BALANCE = 'SORT_BALANCE';
export const SEARCH = 'SEARCH';

export const requestData = () => ({
  type: REQUEST_DATA
});

export const receivedData = json => ({
  type: RECEIVE_DATA,
  json
});

export const failureData = error => ({
  type: FAILURE_DATA,
  payload: error
});

export const sortCompany = () => ({
  type: SORT_COMPANY
})

export const sortBalance = () => ({
  type: SORT_BALANCE
})

export const search = (value) => ({
  type: SEARCH,
  value
})

export function fetchPosts() {
  return dispatch => {
    dispatch(requestData());
    return fetch(`http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2`)
      .then(
        response =>  response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivedData(json))
      },
    );
  };
}



