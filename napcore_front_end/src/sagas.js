import { put, takeLatest, call } from 'redux-saga/effects';

export function* testSaga(action) {
  try {
    const data = yield call(action.service);
    yield put({ type: 'SUCCESS', data });
  } catch (e) {
    yield put({ type: 'ERROR' });
  }
}

function* helloSaga() {
  yield takeLatest('INCREMENT_ASYNC', testSaga)
}

export default helloSaga;
