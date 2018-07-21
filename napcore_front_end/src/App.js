import React, { Component } from 'react';
import { Provider } from 'react-redux';
import napcoreReducers from './reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import helloSaga from './sagas';
import Container from './Container';

const reducers = {
  napcoreState: napcoreReducers,
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
