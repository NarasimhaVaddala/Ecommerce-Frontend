import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    add: (state, action) => {
        const { productName, brandName,size, img } = action.payload;
     
      state.wishlist.push({
        productName: productName,
        brandName: brandName,
        size: size,
        img: img,
        id:nanoid()
      });
    },
  },
});

export const { add } = wishSlice.actions;

export default wishSlice.reducer;
