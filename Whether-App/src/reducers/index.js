import { combineReducers } from 'redux';

import WhetherList from './reducer-whetherList';

const rootReducer = combineReducers({
  whether : WhetherList
});

export default rootReducer;
