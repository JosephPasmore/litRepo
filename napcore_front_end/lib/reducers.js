import { RETRIEVE_NEARBY_LOCATIONS, SEARCH_FOR_LOCATIONS } from './actions';

var napcoreReducers = function napcoreReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: false,
    failed: false
  };
  var action = arguments[1];

  switch (action.type) {
    case RETRIEVE_NEARBY_LOCATIONS:
      return Object.assign({}, state, {
        loading: true,
        failed: false
      });
    case SEARCH_FOR_LOCATIONS:
      return Object.assign({}, state, {
        loading: true,
        failed: false
      });
    default:
      return state;
  }
};

export default napcoreReducers;