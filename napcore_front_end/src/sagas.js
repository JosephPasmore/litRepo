import { put, takeLatest, call, all } from 'redux-saga/effects';
import {
  RETRIEVE_NEARBY_LOCATIONS,
  RETRIEVE_NEARBY_LOCATIONS_SUCCESS,
  RETRIEVE_NEARBY_LOCATIONS_FAILED,
  SEARCH_FOR_LOCATIONS,
  SEARCH_FOR_LOCATIONS_SUCCESS,
  SEARCH_FOR_LOCATIONS_FAILED,
} from "./actions";

function* fetchNearbyLocationsSaga(action) {
  try {
    const data = yield call(action.service.getNearbyLocations);
    yield put({ type: RETRIEVE_NEARBY_LOCATIONS_SUCCESS, data });
  } catch (e) {
    yield put({ type: RETRIEVE_NEARBY_LOCATIONS_FAILED });
  }
}

function* fetchNearbyLocationsSagas() {
  yield takeLatest(RETRIEVE_NEARBY_LOCATIONS, fetchNearbyLocationsSaga)
}

function* searchForLocationsSaga(action) {
  try {
    const data = yield call(action.service.searchForLocations, action.searchTerm);
    yield put({ type: SEARCH_FOR_LOCATIONS_SUCCESS, data });
  } catch (e) {
    yield put({ type: SEARCH_FOR_LOCATIONS_FAILED });
  }
}

function* searchForLocationsSagas() {
  yield takeLatest(SEARCH_FOR_LOCATIONS, searchForLocationsSaga)
}

export default function* NapCoreSagas() {
  yield all([
    fetchNearbyLocationsSagas,
    searchForLocationsSagas,
  ]);
}