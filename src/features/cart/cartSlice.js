import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let token = localStorage.getItem('token');
console.log(token);

const initialState = {
  items: [],
  loading: false,
  error: "",
  priceDetails:{}
};

// const url = `https://ecommerce-backend-ecru-mu.vercel.app/products`;

const url = "https://ecommerce-backend-ecru-mu.vercel.app/products"

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
 
  const res = await axios.post(`${url}/cart`, product, {
    headers: {
      token: token
    }
  });
  return res.data.data;
});

export const getCart = createAsyncThunk('cart/getCart', async () => {
  const res = await axios.get(`${url}/cart`, {
    headers: {
      token: token
    }
  });
  console.log("cart here", res.data.cart);
  return res.data.cart;
});




export const decreaseQuantity =createAsyncThunk('/cart/decrease' , async(product)=>{
  const res = await axios.put(`${url}/cart/decrease`, product,{
    headers: {
      token: token
    }
  });
  console.log(res.data);
  return res.data;
})



export const deleteItemFromCart = createAsyncThunk('/cart/delete' , async(product)=>{

  console.log(product);

  const res = await axios.delete(`${url}/cart/delete`,{
    headers: {
      token: token
    },

    data: { productId: product.productId, size: product.size }
  });
  console.log(res.data);
  return res.data;
})

function calculatePrice(arr) {
  if (!arr) {
    return;
  } else {

console.log("arr" , arr);

  
    const priceForItems = arr.reduce((acc, item) => {

return acc + (item.productId.price * item.quantity)}, 0);

    let totalPrice = 0;
    let packagingFee = 59;
    let deliveryCharges = 0;

    if (priceForItems >= 499) {
      deliveryCharges = 0;
      totalPrice = priceForItems + packagingFee + deliveryCharges;
      console.log(totalPrice, priceForItems, packagingFee, deliveryCharges);
      return { totalPrice, priceForItems, packagingFee, deliveryCharges };
    } else {
      deliveryCharges = 49;
      totalPrice = priceForItems + packagingFee + deliveryCharges;
      console.log(totalPrice, priceForItems, packagingFee, deliveryCharges);
      return { totalPrice, priceForItems, packagingFee, deliveryCharges };
    }
  }
}

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    add: (state, action) => {
      let alreadyThere = state.items.find((e) => e._id === action.payload._id);
      if (!alreadyThere) {
        state.items.push(action.payload);
        state.priceDetails = calculatePrice(state.items);
      }
    },
    del: (state, action) => {
      state.items = state.items.filter(e => e._id !== action.payload.id);
      state.priceDetails = calculatePrice(state.items);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      
      state.priceDetails = calculatePrice(state.items);
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });




    builder.addCase(getCart.fulfilled, (state, action) => {
      state.items = action.payload;
      state.priceDetails = calculatePrice(state.items);
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });



    builder.addCase(decreaseQuantity.fulfilled , (state,action)=>{
      
      state.priceDetails = calculatePrice(state.items);
      state.loading = false
      state.error = ""
    });

    builder.addCase(decreaseQuantity.pending , (state,action)=>{
      state.loading = true
    })

    builder.addCase(decreaseQuantity.rejected , (state,action)=>{
      state.loading = false
      state.error = action.error.message
    })


    
    builder.addCase(deleteItemFromCart.fulfilled , (state,action)=>{
      state.priceDetails = calculatePrice(state.items);
      state.loading = true
      state.error = ""
    });

    builder.addCase(deleteItemFromCart.pending , (state,action)=>{
      state.loading = true
    })

    builder.addCase(deleteItemFromCart.rejected , (state,action)=>{
      state.loading = false
      state.error = action.error.message
    })

  }
});

export const { add, del } = cartSlice.actions;

export default cartSlice.reducer;
