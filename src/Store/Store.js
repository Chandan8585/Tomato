import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from "./homeSlice.js";
export const Store = configureStore({
  reducer: {
    home: HomeReducer

  },
});

