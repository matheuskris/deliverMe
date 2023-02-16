import { combineReducers, configureStore } from "@reduxjs/toolkit";

import basketSlice from "./basketSlice/basketSlice";

const rootReducer = combineReducers({
  basket: basketSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
