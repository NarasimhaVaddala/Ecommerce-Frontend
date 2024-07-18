import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import axios from "axios";
import UserContext from "../app/context";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default function Products() {
  const value = useContext(UserContext);
  const [data, setData] = useState([]);

  const {gender , category , type } = useParams()
  console.log(gender , category , type );

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

  //   <Link className="font-semibold" to={`/products/men/topwear`}>Men Topwear</Link>
  // <hr />
  //   <Link className="font-semibold" to={`/products/women/topwear`}>Account Settings</Link>
  // <hr />
  //   <Link className="font-semibold" to={`/products/babies/topwear`}>Address</Link>

  // <hr />

  return (
    <section >



      <div className="container grid grid-cols-1  lg:grid-cols-4 gap-4 mb-8 mt-8">


      <div className="hidden lg:flex flex-col  bg-white sticky top-10 p-4 space-y-4">

        <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-blue-800">Men</h3>
              <div className="flex flex-col gap-2">
                  <Dropdown title="Topwear" text={["shirts", "tshirts"]} url='/products/men/topwear'/> 
                  <Dropdown title="Bottom wear" text={["jeans", "trousers", 'joggers' , 'boxers']} url='/products/men/bottomwear'/> 
                  <Dropdown title="Inners" text={["tanks", "underwear"]} url='/products/men/inners'/> 
                  <Dropdown title="Footwear" text={["sandals", "shoes", 'slides']} url='/products/men/bottomwear'/>                 
              </div>                
        </div>
        <hr />
        <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-blue-800">Women</h3>
              <div className="flex flex-col gap-2">
                  <Dropdown title="Topwear" text={["shirts", "tshirts"]} url='/products/women/topwear'/> 
                  <Dropdown title="Bottom wear" text={["jeans", "trousers", 'joggers' , 'boxers']} url='/products/women/bottomwear'/> 
                  <Dropdown title="Inners" text={["tanks", "underwear"]} url='/products/women/inners'/> 
                  <Dropdown title="Footwear" text={["sandals", "shoes", 'slides']} url='/products/women/bottomwear'/>                 
              </div>                
        </div>
        <hr />
       
      </div>



      {/* Here The entire objects are sent as prop to ensure readability and reducing number of lines of code */}
      <div className="mx-auto row-span-4 grid grid-cols-2 lg:grid-cols-3 lg:col-start-2 lg:col-end-5 gap-4">
        
        {data.length<1?<p className="text-center font-bold text-xl">No Products Available</p> :data.map(e=> <Card obj={e}  key={e._id}  /> )}
        
      </div>
      </div>
    </section>
  );
}





function Dropdown({title , text, url}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        className="flex gap-4 items-center justify-between font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      {isOpen && (
        <div className={`flex flex-col gap-2 transition-all ease-in-out duration-1000 overflow-hidden`}>
         {
          text.map((e, index)=>{
            return  <Link key={index} className="capitalize text-sm"  to={`${url}/${e}`}>{e}</Link>
          })
         }
          
        </div>
      )}
    </div>
    
  );
}
