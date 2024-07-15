import React from "react";
import { Link } from "react-router-dom";
import { add } from "../features/wishlist/wishSlice";

import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";

export default function Card({ productName,brandName,desc,price,size,img, })
 {
  const dispatch = useDispatch();

  const addtoWishlist = () => {
    dispatch(
      add({
        
        productName: productName,
        brandName: brandName,
        desc: desc,
        price: price,
        size:size,
        img: img,
      })
    );

    toast.success("Added To Wishlist");
  };

  return (
    <div className={`flex flex-col mb-32 md:h-96  hover:cursor-pointer transition ease-in-out duration-300`}>
      <div className="h-[95%] shadow-lg">
        <Link to={`/product/`}>
          <img className="w-[100%] h-[100%] " src={img} alt="Rashmika" />
        </Link>
      </div>
      <ToastContainer />
           <p className="font-bold px-1 mt-2 flex justify-between text-lg">
          <span>{productName}</span>
          <i
            className="fa-regular fa-heart hover:text-red-600 hover:scale-110"
            onClick={addtoWishlist}
          ></i>
        </p>
      
      <p className="font-semibold text-slate-600 px-1">by {brandName}</p>
    
        <p className=" px-1 flex justify-between items-center"><span className="font-extrabold text-xl text-slate">Rs {price}/-</span>   {price>=499 && <span className="bg-blue-400 text-white text-xs p-1">Free Delivery</span>}</p>
    
    </div>
  );
}


// productName: productName,
// brandName: brandName,
// desc: desc,
// price: price,
// size:size,
// img: img,

// ${
//   !category && "lg:shadow-xl"
// } ${!category && "md:h-[auto]"}