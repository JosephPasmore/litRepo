import React, { Component } from 'react';
import { Provider } from 'react-redux';
import napcoreReducers from '../reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IntlProvider } from 'react-intl';
import NapCoreSagas from '../sagas';
import Container from './Container';
import './App.scss';

const reducers = {
  napcoreState: napcoreReducers,
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(NapCoreSagas);

class App extends Component {
  render() {
    return (
      <IntlProvider locale="en-US">
        <Provider store={store}>
          <Container />
        </Provider>
      </IntlProvider>
    );
  }
}

export default App;
