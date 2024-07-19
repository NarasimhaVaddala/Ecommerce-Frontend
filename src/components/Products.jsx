import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import axios from "axios";
import UserContext from "../app/context";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";

export default function Products() {
  const value = useContext(UserContext);
  const [data, setData] = useState([]);

  const {gender , category , type } = useParams()
  

  const dispatch = useDispatch();


  const getData = async() => {
    //Loading variable decalred in app.js which is used to show loader component while fetching data
    //If loading true loader component will show 
    value.setLoading(true)

    //data will be fetched from api and stored in Redux store
    await axios.get(`http://localhost:3000/products/${gender}/${category}`)
    .then(res => setData(res.data.data))
    .catch(e=>console.log(e.message))

    

    //loading will be false
    value.setLoading(false)
  };

  useEffect(() => {
    getData();
  }, [gender , category]);

  
  

  return (
    <section >



      <div className="container grid grid-cols-1  lg:grid-cols-4 gap-4 mb-8 mt-8">


      <div className="hidden lg:flex flex-col  bg-white sticky top-10 p-4 space-y-4">

        <ProductsDropdown/>

       
      </div>



      {/* Here The entire objects are sent as prop to ensure readability and reducing number of lines of code */}
      <div className="mx-auto row-span-4 grid grid-cols-2 lg:grid-cols-3 lg:col-start-2 lg:col-end-5 gap-4">
        
        {data.length<1?<p className="text-center font-bold text-xl">No Products Available</p> :data.map(e=> <Card obj={e}  key={e._id}  /> )}
           
      </div>
      </div>
    </section>
  );
}












