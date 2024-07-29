import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice"
import wishReducer from '../features/wishlist/wishSlice'
import productReducer from '../features/products/productSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    wish:wishReducer,
    products:productReducer,
    user:userReducer
  },
})