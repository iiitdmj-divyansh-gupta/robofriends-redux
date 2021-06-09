import { apiCall } from './api/api'


import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants.js';
 
export const setSearchField = (text) => ({
    // type: 'CHANGE_SEARCH_FIELD',
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

/*
above function - take input text and return object

constant is CAPITALIZED

nifty-trick for `type` parameter: we use constant variables rather than strings
to keep track of what we are going to changes as we get error
if we misspell it anywhere else.
*/

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
