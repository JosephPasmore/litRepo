import {
  SHOW_DETAIL_VIEW,
  HIDE_DETAIL_VIEW,
  RETRIEVE_NEARBY_LOCATIONS,
  RETRIEVE_NEARBY_LOCATIONS_SUCCESS,
  RETRIEVE_NEARBY_LOCATIONS_FAILED,
  SEARCH_FOR_LOCATIONS,
  SEARCH_FOR_LOCATIONS_SUCCESS,
  SEARCH_FOR_LOCATIONS_FAILED,
  SUBMIT_COMMENT,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAILED,
}
from './actions';

const napcoreReducers = (state = {
  detailViewVisible: false,
  locationId: null,
  loading: false,
  failed: false,
  locations: [],
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
    case RETRIEVE_NEARBY_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
        locations: action.data,
      };
    case RETRIEVE_NEARBY_LOCATIONS_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        locations: [],
      };
    case SEARCH_FOR_LOCATIONS:
      return {
        ...state,
        loading: true,
        failed: false,
      };
    case SEARCH_FOR_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
        locations: action.data,
      };
    case SEARCH_FOR_LOCATIONS_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        locations: [],
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
      };
    case SUBMIT_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
        locations: action.data,
      };
    case SUBMIT_COMMENT_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default napcoreReducers;
