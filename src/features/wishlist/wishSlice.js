import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let token = localStorage.getItem('token');
console.log(token, "from wishSlice");

const initialState = {
  wishlist: [],
  loading: false,
  error: ""
};

const url = `http://localhost:3000/products`;

export const addToWishlist = createAsyncThunk('/wishlist/add', async (productId) => {
  console.log(token, "inside async");
  const res = await axios.post(`${url}/wishlist`, { productId: productId }, {
    headers: {
      token: token
    }
  });

  return res.data;
});

export const delWishlist = createAsyncThunk('/wishlist/delete', async (productId) => {
  console.log(productId);
  const res = await axios.delete(`${url}/wishlist`, {
    headers: {
      token: token
    },
    data: { productId: productId }
  });

  return res.data;
});

export const getWishlist = createAsyncThunk('/wishlist', async () => {
  const res = await axios.get(`${url}/wishlist`, {
    headers: {
      token: token
    }
  });

  return res.data.wishlist;
});

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
      state.wishlist = state.wishlist.filter((e) => e._id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addToWishlist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.wishlist = action.payload;
      console.log(action.payload, "action.payload of getwish");
    });
    builder.addCase(getWishlist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(delWishlist.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(delWishlist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(delWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export const { add, del } = wishSlice.actions;

export default wishSlice.reducer;
