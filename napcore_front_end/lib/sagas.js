import _regeneratorRuntime from "babel-runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(fetchNearbyLocationsSaga),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(fetchNearbyLocationsSagas),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(searchForLocationsSaga),
    _marked4 = /*#__PURE__*/_regeneratorRuntime.mark(searchForLocationsSagas),
    _marked5 = /*#__PURE__*/_regeneratorRuntime.mark(NapCoreSagas);

import { put, takeLatest, call, all } from 'redux-saga/effects';
import { RETRIEVE_NEARBY_LOCATIONS, RETRIEVE_NEARBY_LOCATIONS_SUCCESS, RETRIEVE_NEARBY_LOCATIONS_FAILED, SEARCH_FOR_LOCATIONS, SEARCH_FOR_LOCATIONS_SUCCESS, SEARCH_FOR_LOCATIONS_FAILED } from "./actions";

function fetchNearbyLocationsSaga(action) {
  var data;
  return _regeneratorRuntime.wrap(function fetchNearbyLocationsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return call(action.service.getNearbyLocations);

        case 3:
          data = _context.sent;
          _context.next = 6;
          return put({ type: RETRIEVE_NEARBY_LOCATIONS_SUCCESS, data: data });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return put({ type: RETRIEVE_NEARBY_LOCATIONS_FAILED });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function fetchNearbyLocationsSagas() {
  return _regeneratorRuntime.wrap(function fetchNearbyLocationsSagas$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return takeLatest(RETRIEVE_NEARBY_LOCATIONS, fetchNearbyLocationsSaga);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function searchForLocationsSaga(action) {
  var data;
  return _regeneratorRuntime.wrap(function searchForLocationsSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return call(action.service.searchForLocations, action.searchTerm);

        case 3:
          data = _context3.sent;
          _context3.next = 6;
          return put({ type: SEARCH_FOR_LOCATIONS_SUCCESS, data: data });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return put({ type: SEARCH_FOR_LOCATIONS_FAILED });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 8]]);
}

function searchForLocationsSagas() {
  return _regeneratorRuntime.wrap(function searchForLocationsSagas$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return takeLatest(SEARCH_FOR_LOCATIONS, searchForLocationsSaga);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

export default function NapCoreSagas() {
  return _regeneratorRuntime.wrap(function NapCoreSagas$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return all([fetchNearbyLocationsSagas, searchForLocationsSagas]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this);
}