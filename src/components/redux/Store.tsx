import { configureStore } from "@reduxjs/toolkit";
import favoriteSystem from "./favoriteSystem";

export const store = configureStore({
  reducer: {
    list: favoriteSystem,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
