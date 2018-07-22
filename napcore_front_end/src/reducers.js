import {
  SHOW_DETAIL_VIEW,
  HIDE_DETAIL_VIEW
}
from './actions';

const napcoreReducers = (state = {
    detailViewVisible: false,
    locationId: null,
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
    default:
      return state;
  }
};

export default napcoreReducers;
