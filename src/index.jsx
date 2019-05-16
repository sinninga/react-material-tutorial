import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

import playersReducer from './reducers/players_reducer';

const reducers = combineReducers({
  players: playersReducer
});


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));
