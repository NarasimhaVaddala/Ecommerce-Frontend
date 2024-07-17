import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    add: (state, action) => {
      let alreadyThere = state.wishlist.find((e) => e._id === action.payload._id);

      if (!alreadyThere) {
        state.wishlist.push(action.payload);
      }
     
    },
    del: (state, action) => {
      state.wishlist = state.wishlist.filter((e) => e._id != action.payload);
    },
  },
});

export const { add, del } = wishSlice.actions;

export default wishSlice.reducer;
