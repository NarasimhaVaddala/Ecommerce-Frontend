import React, { useEffect, useContext } from "react";
import Card from "./Card";
import UserContext from "../app/context";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";
import {getProducts} from '../features/products/productSlice'

export default function Products() {
  const value = useContext(UserContext);
  const {gender , category ,type } = useParams() 
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);  


  async function getData(){
    value.setLoading(true)    
    await dispatch(getProducts({gender , category , type}))
    value.setLoading(false)
  } 

  useEffect(() => {
    
getData()

  }, [gender , category,type]);

  
  

  return (
    <section >
      <div className="container grid grid-cols-1  lg:grid-cols-4 gap-4 mb-8 mt-8">
          <div className="hidden lg:flex flex-col  bg-white sticky top-10 p-4 space-y-4">
            <ProductsDropdown/>          
          </div>
      {/* Here The entire objects are sent as prop to ensure readability and reducing number of lines of code */}
          <div className="mx-auto row-span-4 grid grid-cols-2 lg:grid-cols-3 lg:col-start-2 lg:col-end-5 gap-4">        
            {items.length<1?<p className="w-full font-bold text-xl text-center col-span-5">No Products Available</p> :items.map(e=> <Card obj={e}  key={e._id}  /> )}
          </div>
    </div>
    </section>
  );
}












