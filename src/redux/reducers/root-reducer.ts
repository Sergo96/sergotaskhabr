import { combineReducers } from "redux";
import picturesReducer from "./reducer";

const rootReducer = combineReducers({
  data: picturesReducer,
});

export default rootReducer;
