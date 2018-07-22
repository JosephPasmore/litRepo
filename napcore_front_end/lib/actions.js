export var RETRIEVE_NEARBY_LOCATIONS = 'RETRIEVE_NEARBY_LOCATIONS';
export var RETRIEVE_NEARBY_LOCATIONS_SUCCESS = 'RETRIEVE_NEARBY_LOCATIONS_SUCCESS';
export var RETRIEVE_NEARBY_LOCATIONS_FAILED = 'RETRIEVE_NEARBY_LOCATIONS_FAILED';
export var SEARCH_FOR_LOCATIONS = 'SEARCH_LOCATIONS';
export var SEARCH_FOR_LOCATIONS_SUCCESS = 'SEARCH_LOCATIONS_SUCCESS';
export var SEARCH_FOR_LOCATIONS_FAILED = 'SEARCH_LOCATIONS_FAILED';

export function retrieveNearbyLocations(service) {
    return { type: RETRIEVE_NEARBY_LOCATIONS, service: service };
}

export function searchForLocations(service, searchTerm) {
    return { type: SEARCH_FOR_LOCATIONS, service: service, searchTerm: searchTerm };
}