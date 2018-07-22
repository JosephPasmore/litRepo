import {
  SHOW_DETAIL_VIEW,
  HIDE_DETAIL_VIEW,
  RETRIEVE_NEARBY_LOCATIONS,
  SEARCH_FOR_LOCATIONS,
}
from './actions';

const napcoreReducers = (state = {
    detailViewVisible: false,
    locationId: null,
    loading: false,
    failed: false,
  }, action) => {
  switch (action.type) {
    case SHOW_DETAIL_VIEW:
      return {
        ...state,
        detailViewVisible: true,
        locationId: action.locationId,
      };
    case HIDE_DETAIL_VIEW:
      return {
        ...state,
        detailViewVisible: false,
      };
    case RETRIEVE_NEARBY_LOCATIONS:
      return {
        ...state,
        loading: true,
        failed: false,
      };
    case SEARCH_FOR_LOCATIONS:
      return {
        ...state,
        loading: true,
        failed: false,
      };
    default:
      return state;
  }
};

export default napcoreReducers;
