import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice"
import wishReducer from '../features/wishlist/wishSlice'

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    wish:wishReducer
  },
})