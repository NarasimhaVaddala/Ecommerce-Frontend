import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    add: (state, action) => {
      const { productName, brandName, desc,size, price, img } = action.payload;
      
      state.wishlist.push({
        productName: productName,
        brandName: brandName,
        desc: desc,
        price: price,
        size:size,
        img: img,
        id:nanoid()
      });
    },

    del :(state,action)=>{
        state.wishlist = state.wishlist.filter(e=>e.id!=action.payload.id)
    }
  },
});

export const { add, del } = wishSlice.actions;

export default wishSlice.reducer;
