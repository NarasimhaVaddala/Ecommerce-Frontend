import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  products: [],
};








export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    
    
  },
});

export const {  } = productSlice.actions;

export default productSlice.reducer;
