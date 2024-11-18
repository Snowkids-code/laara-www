import { combineReducers } from "redux";
import propertyReducer from "./property.reducer";

const appReducer = combineReducers({
    propertyReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
