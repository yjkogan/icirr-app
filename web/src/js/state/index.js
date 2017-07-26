import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import map from 'state/map';
import settings from 'state/settings';

export default combineReducers({
  form: formReducer,
  map,
  settings,
});
