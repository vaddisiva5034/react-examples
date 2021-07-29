import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./app.reducer";
export const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
});
