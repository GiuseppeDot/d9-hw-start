import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import favouriteReducer from "../reducers/favouriteReducer";

const store = configureStore({
  reducer: mainReducer,
});

const myReduxStore = combineReducers({
  favourite: favouriteReducer,
});

export default store;
