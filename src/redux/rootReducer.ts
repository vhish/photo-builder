import { combineReducers } from "@reduxjs/toolkit";
import photoFeatureReducer from "./photoFeatureReducer";

const rootReducer = combineReducers({
  photoFeatureReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
