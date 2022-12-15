import { createSlice } from "@reduxjs/toolkit";

const favoriteSystemSlice = createSlice({
  name: "favoriteList",
  initialState: {
    favoriteList: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteList.push(action.payload as never);
    },

    removeFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSystemSlice.actions;
export default favoriteSystemSlice.reducer;
