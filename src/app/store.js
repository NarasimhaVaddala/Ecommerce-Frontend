import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice"
import wishReducer from '../features/wishlist/wishSlice'
import productReducer from '../features/products/productSlice'

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    wish:wishReducer,
    products:productReducer
  },
})