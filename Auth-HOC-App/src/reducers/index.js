import { combineReducers } from 'redux';

import authenticateReducer from './authenticate';

const rootReducer = combineReducers({
  authenticated: authenticateReducer
});

export default rootReducer;
