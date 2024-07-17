import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  priceDetails:{}
  
};



function calculatePrice(arr){

    if (!arr) {
      return
    }

    else{
      const priceForItems =  arr.reduce((acc, cur, index, arr) => {return acc + cur.price},0);
      let totalPrice = 0
      let packagingFee = 0
      let deliveryCharges = 0 
    
      if (priceForItems >= 499 ) {
        packagingFee = 59;
        deliveryCharges = 0;
        totalPrice = priceForItems + packagingFee + deliveryCharges
        return {totalPrice , priceForItems , packagingFee , deliveryCharges}
        
      }
      else{
        packagingFee = 59;
        deliveryCharges = 49;
        totalPrice = priceForItems + packagingFee + deliveryCharges
        return {totalPrice , priceForItems , packagingFee , deliveryCharges}
      }
    }

}

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,

  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
      state.priceDetails = calculatePrice(state.items)
      
      
    },
    
    del :(state,action)=>{
      state.items = state.items.filter(e=>e.id!=action.payload.id)
      state.priceDetails = calculatePrice(state.items)
    }
  },
});


export const { add,del } = cartSlice.actions

export default cartSlice.reducer





// brand:"Marvel"
// category:"Topwear"
// color:"white"
// description:"High-quality shirt "
// gender:"men"
// image:"https://images.bewakoof.com/t640/men-s-white-wander-geometry-graphic-printed-oversized-t-shirt-519178-1708612769-1.jpg"
// name:"Men Fucking Tshirt"
// price:399
// size:{S: 0, M: 10, L: 10, XL: 10, XXL: 10}
// type:"shirts"
// __v:0
// _id:"669759601c667bd4c11af5c0"