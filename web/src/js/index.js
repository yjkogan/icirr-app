require('../css/index.scss');
require.context('../images', true, /^\.\//);

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import strings from 'localization';

import rootReducer from './state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  persistState('settings'),
);

const initialState = undefined; // eslint-disable-line no-undefined

const store = createStore(rootReducer, initialState, enhancer);
strings.setLanguage(store.getState().settings.language);

import App from './App';

const rootEl = document.getElementById('Root');
// Render the main component into the dom
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(App);
  });
}
