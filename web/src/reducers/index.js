import { combineReducers } from 'redux';

import appReducer from './sessionReducer';

const rootReducer = combineReducers({
  summaries: appReducer
});

export default rootReducer;
