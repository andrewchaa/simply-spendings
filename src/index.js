import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import App from './App';
import './index.css';

var rootReducer = combineReducers({
  form: formReducer
});

const loggerMiddleware = createLogger();

let store = createStore(rootReducer, {},
  compose(applyMiddleware(loggerMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
