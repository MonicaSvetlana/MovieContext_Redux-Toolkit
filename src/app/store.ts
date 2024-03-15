import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movieSlice";
export const store = configureStore({
  reducer: {
    movieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
