import { createSlice, nanoid , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://ecommerce-backend-ecru-mu.vercel.app//products"


export const getProducts = createAsyncThunk('getProducts' , async({gender , category,type})=>{  
  console.log(gender , category , type);
  let res = await axios.get(`${url}/${gender}/${category}/${type}`)   
  return res.data.data;
})





const initialState = {
  items: [],
  loading:false,
  error:''
};

export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    
    
  },

  extraReducers:(builder)=>{


    builder.addCase(getProducts.fulfilled ,(state,action)=>{
      state.items = action.payload;
      state.loading = false;
    })
    builder.addCase(getProducts.pending ,(state,action)=>{
      state.loading = true;
    })
    builder.addCase(getProducts.rejected ,(state,action)=>{    
      state.loading = false;
      state.error = action.error.message;
    })


  }
});

export const {  } = productSlice.actions;

export default productSlice.reducer;
