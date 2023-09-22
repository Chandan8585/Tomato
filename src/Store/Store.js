import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from "./homeSlice";
export const Store = configureStore({
  reducer: {
    home: HomeReducer

  },
});

