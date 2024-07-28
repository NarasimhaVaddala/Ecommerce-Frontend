import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    orders:[],
    address:[],
    loading:false,
    error:'',
} 


const url = 'http://localhost:3000'

export const getDetails = createAsyncThunk('getdetails' , async()=>{
    const token = localStorage.getItem('token')
    const res = await axios.get(`${url}/getuserdata` ,{
        headers :{
            token:token
        }
    })

    return res.data;
})
export const editDetails = createAsyncThunk('addAddress' , async(details)=>{
    const token = localStorage.getItem('token')
    const res = await axios.post(`${url}/address` ,details,{
        headers :{
            token:token
        }
    })

    return res.data;
})


export const placeOrder = createAsyncThunk('placeOrder' , async(order)=>{
    const token = localStorage.getItem('token')
    const res = await axios.post(`${url}/placeorder` ,order,{
        headers :{
            token:token
        }
    })

    return res.data;
})

export const userSlice = createSlice({
    initialState,


extraReducers:(builder)=>{


        builder.addCase(getDetails.fulfilled , (state,action)=>{
            state.orders = action.payload.orders;
            state.address = action.payload.address;
            state.loading = false
        
        })
        builder.addCase(getDetails.pending , (state,action)=>{
                    state.loading = true
        })
        builder.addCase(getDetails.rejected , (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })


        builder.addCase(addAddress.fulfilled , (state,action)=>{
            // state.orders = action.payload.orders;
            // state.address = action.payload.address;
            state.loading = false
        
        })
        builder.addCase(addAddress.pending , (state,action)=>{
                    state.loading = true
        })
        builder.addCase(addAddress.rejected , (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })

        builder.addCase(placeOrder.fulfilled , (state,action)=>{
            state.orders = action.payload.orders;;
            state.loading = false
        
        })
        builder.addCase(placeOrder.pending , (state,action)=>{
                    state.loading = true
        })
        builder.addCase(placeOrder.rejected , (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
}


})