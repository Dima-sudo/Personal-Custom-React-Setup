import { combineReducers } from 'redux';

import utilsReducer from './Reducers/utilsReducer';

export default combineReducers({
  Utils: utilsReducer
});
