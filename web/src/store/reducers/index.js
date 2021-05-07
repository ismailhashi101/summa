import { combineReducers } from "redux";
import summaryReducer from "./summaryReducer";

const rootReducer = combineReducers({
  summaryReducer,
});

export default rootReducer;
