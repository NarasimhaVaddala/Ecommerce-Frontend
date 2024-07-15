import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  wishlist:[]
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,

  reducers: {
    add: (state, action) => {
      const { productName, brandName, desc,size, price, img } = action.payload;
      state.items.push({
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
        state.items = state.items.filter(e=>e.id!=action.payload.id)
    }
  },
});


export const { add,del } = cartSlice.actions

export default cartSlice.reducer