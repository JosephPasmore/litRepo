export const SHOW_DETAIL_VIEW = 'SHOW_DETAIL_VIEW';
export const HIDE_DETAIL_VIEW = 'HIDE_DETAIL_VIEW';
export const RETRIEVE_NEARBY_LOCATIONS = 'RETRIEVE_NEARBY_LOCATIONS';
export const RETRIEVE_NEARBY_LOCATIONS_SUCCESS = 'RETRIEVE_NEARBY_LOCATIONS_SUCCESS';
export const RETRIEVE_NEARBY_LOCATIONS_FAILED = 'RETRIEVE_NEARBY_LOCATIONS_FAILED';
export const SEARCH_FOR_LOCATIONS = 'SEARCH_LOCATIONS';
export const SEARCH_FOR_LOCATIONS_SUCCESS = 'SEARCH_LOCATIONS_SUCCESS';
export const SEARCH_FOR_LOCATIONS_FAILED = 'SEARCH_LOCATIONS_FAILED';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const SUBMIT_COMMENT_SUCCESS = 'SUBMIT_COMMENT_SUCESS';
export const SUBMIT_COMMENT_FAILED = 'SUBMIT_COMMENT_FAILED';

export function showDetailView(locationId) {
  return {
    type: SHOW_DETAIL_VIEW,
    locationId
  };
}

export function hideDetailView() {
  return {
    type: HIDE_DETAIL_VIEW,
  };
}

export function retrieveNearbyLocations(service) {
  return { type: RETRIEVE_NEARBY_LOCATIONS, service };
}

export function searchForLocations(service, searchTerm) {
  return { type: SEARCH_FOR_LOCATIONS, service, searchTerm };
}

export function submitComment(service, locationId, text, dateTime) {
  return { type: SUBMIT_COMMENT, service, locationId, text, dateTime };
}
