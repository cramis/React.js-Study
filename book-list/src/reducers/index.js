import { combineReducers } from 'redux';
import BookReducer from './BookReducer';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
