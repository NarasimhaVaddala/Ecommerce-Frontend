import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToWishlist as addwish} from "../features/wishlist/wishSlice";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

import UserContext from "../app/context";
// const token = localStorage.getItem('token')

console.log("card redner")



export default function Card({ obj })
 {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {loading, setLoading, isAuthenticated} = useContext(UserContext)

  const addtoWishlist = async() => {
    // console.log(isAuthenticated);
    if (!isAuthenticated)return navigate('/login')  
    setLoading(true) 
    await dispatch(addwish(obj._id))
    setLoading(false)
    toast.success("Added To Wishlist");
  };

  return (
    <div className={`flex flex-col mb-32 h-96  hover:cursor-pointer transition ease-in-out duration-300`}>

      <div className="h-[95%] shadow-lg">
        <Link to={`/product/${obj._id}`}>
          <img className="w-[100%] h-[100%] " src={obj.image} alt="Rashmika" />
        </Link>
      </div>


      {/* This Toast component will open a notification when added to wishlist */}
      <ToastContainer />


        <p className="font-bold px-1 mt-2 flex justify-between text-lg">
            <Link to={`/product/${obj._id}`}>{obj.name}</Link> 
            <i className="fa-regular fa-heart hover:text-red-600 hover:scale-110" onClick={addtoWishlist}/>
        </p>
      
      <p className="font-semibold text-slate-600 px-1">by {obj.brand}</p>
    
      <p className=" px-1 flex justify-between items-center">
        <span className="font-extrabold text-xl text-slate">Rs {obj.price}/-</span> 
        {obj.price>=499 && <span className="bg-blue-400 text-white text-xs p-1">Free Delivery</span>}
        {/* If the price is greater than  499 The product is eligible for free delivery so we will show The free delivery text only when price is greater than 499 */}
      </p>
    
    </div>
  );
}


