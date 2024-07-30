import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    orders:[],
    details:{
        first_name:"",
        last_name:"",
        email:"",
        mobile:""
    },
    address:{
        name:"",
        addr:"",
        mobile:"",
        pincode:""
    },
    loading:false,
    error:'',
} 


const url = 'http://localhost:3000/user'

export const getDetails = createAsyncThunk('getdetails' , async()=>{
    const token = await localStorage.getItem('token')
    const res = await axios.get(`${url}/getuser` ,{
        headers :{
            token:token
        }
    })
    return res.data.data;
})


export const editDetails = createAsyncThunk('editdetails' , async(details)=>{
    const token = await localStorage.getItem('token')
    const res = await axios.put(`${url}/edituser` ,details,{
        headers :{
            token:token
        }
    })
    
    // console.log(res.data.data , "from userslice");
    return res.data.data;
})



export const placeOrder = createAsyncThunk('placeorder' , async(order)=>{
    const token = await localStorage.getItem('token')
    const res = await axios.post(`${url}/order`,order ,{
        headers :{
            token:token
        }
    })
    
    // console.log(res.data.data , "from userslice");
    return res.data.data;

})
export const getOrder = createAsyncThunk('getorder' , async()=>{
    const token = await localStorage.getItem('token')
    const res = await axios.get(`${url}/order` ,{
        headers :{
            token:token
        }
    })
    
    // console.log(res.data.data , "from userslice");
    return res.data.data;

})







export const userSlice = createSlice({
    initialState,
    name:"user",
    reducers:{},


extraReducers:(builder)=>{


        builder.addCase(getDetails.fulfilled , (state,action)=>{
            // console.log(action.payload, " from fulfilled");
            const {first_name , last_name , email , mobile , address} = action.payload;
            state.address = address;
            state.details = {first_name , last_name , email , mobile};

            // console.log(state.address , state.details);
            state.loading = false
        
        })
        builder.addCase(getDetails.pending , (state,action)=>{
                    state.loading = true
        })
        builder.addCase(getDetails.rejected , (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })


        builder.addCase(editDetails.fulfilled , (state,action)=>{
            // state.details = action.payload;
            state.loading = false
        
        })
        builder.addCase(editDetails.pending , (state,action)=>{
                    state.loading = true
        })
        builder.addCase(editDetails.rejected , (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })



        builder.addCase(placeOrder.fulfilled , (state,action)=>{
            // state.details = action.payload;
            state.loading = false
        
        })
        builder.addCase(placeOrder.pending , (state,action)=>{
                    state.loading = true
        })
        builder.addCase(placeOrder.rejected , (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })




        builder.addCase(getOrder.fulfilled , (state,action)=>{
            state.orders = action.payload;
            state.loading = false
        
        })
        builder.addCase(getOrder.pending , (state,action)=>{
                    state.loading = true
        })
        builder.addCase(getOrder.rejected , (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })


     

       
}


})



export default userSlice.reducer;