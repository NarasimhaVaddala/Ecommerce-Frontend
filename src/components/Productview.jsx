import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";

import {add, del} from "../features/cart/cartSlice"
import { useNavigate } from "react-router-dom";

export default function DetailedProductView() {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const AddtoCart = () => {

  


    if (!selectedSize) {
      toast.warn("Please Select Size");
    } 
    
    else if (items.length >= 9) {
      toast.error("cart is Full")
    }else {
      console.log(selectedSize);
      dispatch(
        add({
          productName: "Ram",
          brandName: "This is a Good Product",
          desc:"lorem 7489464 asfdas",
          price: 1799,
          size: selectedSize,
          img: "https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg",
        })
      );
      toast.success("Added To Cart");
      setSelectedSize("")
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <img
              className="lg:w-[80%] "
              src="https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg"
              alt=""
            />
          </div>

          <div >
            <h2 className="text-2xl font-bold">Product Name </h2>
            <p className="font-semibold">Brand Name</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet
              repellat aspernatur voluptas accusamus numquam optio possimus
              voluptatibus sunt minus?
            </p>
            <h2 className="text-2xl font-bold my-2">₹ 1,799</h2>
            <p>Inclusive of all Taxes</p>
            <hr />
            <h2 className="text-xl font-bold">Select Size</h2>
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label key={size} className="flex items-center">
                  <input
                    className="hidden"
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={handleSizeChange}
                  />
                  <span
                    className={`flex items-center justify-center w-12 h-12 border rounded-lg cursor-pointer transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-black"
                    }`}
                  >
                    {size}
                  </span>
                </label>
              ))}
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 my-4 lg:w-[100%]">

              <button
                className="w-[100%]  transition-all ease-in-out duration-300 bg-black border text-white py-2 px-4 rounded flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-[1px] "
                onClick={AddtoCart}
              >
                <i className="fa-solid fa-bag-shopping mr-2"></i> Add To CART
              </button>


              <button className="w-[100%]  transition-all ease-in-out duration-300 border border-green-600 text-green-600 py-2 px-4 rounded flex items-center justify-center hover:bg-green-500 hover:text-white ">
                <i className="fa-regular fa-heart mr-2"></i> Add To Wishlist
              </button>


              <ToastContainer />
            </div>
            <hr />
            <div className="flex items-center gap-4 my-2">
              <img
                src="https://images.bewakoof.com/web/ic-star-offer.svg"
                alt="return"
              />
              <div>
                <p>100% Pure Cotton</p>
                <p>Best In This Price Segment</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-4 my-2">
              <img
                src="https://images.bewakoof.com/web/ic-return.svg"
                alt="return"
              />
              <div>
                <p>15 Days Return and Exchange</p>
                <p>Know More about return policy | contact us</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center my-2">
              {[
                { icon: "fa-solid fa-shield-cat", text: "Secure Payments" },
                {
                  icon: "fa-solid fa-hand-holding-dollar",
                  text: "Instant Refunds",
                },
                {
                  icon: "fa-regular fa-circle-check",
                  text: "100% Genuine product",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <i className={`${item.icon} text-4xl`}></i>
                  <p className="mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
