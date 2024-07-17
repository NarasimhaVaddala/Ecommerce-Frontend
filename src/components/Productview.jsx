import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";
import { add as wishadd } from "../features/wishlist/wishSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailedProductView() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const { id } = useParams();
  const [data, setData] = useState({});

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const addtoWishlist = () => {
    if (!data) {
      toast.error("Something Went Wrong! Please Try Later");
    } else {
      dispatch(wishadd(data));
      toast.success("Added To Wishlist");
    }
  };

  const AddtoCart = () => {
    if (!selectedSize)toast.warn("Please Select Size")
    else if (items.length >= 9)toast.error("Cart is Full")
    else {
      dispatch(add({...data,size: selectedSize}))
      toast.success("Added To Cart");
      setSelectedSize("");
    }
  };

  const getData = () => {
    axios.get(`http://localhost:3000/products/product/${id}`)
    .then(res =>setData(res.data.data[0]))
    .catch(err =>console.log(err.message))      
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <img className="lg:w-[80%]" src={data.image} alt="image" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <p className="font-semibold">{data.brand}</p>
            <p>{data.description}</p>
            <h2 className="text-2xl font-bold my-2">₹ {data.price}/-</h2>
            <p>Inclusive of all Taxes</p>
            <hr />
            <h2 className="text-xl font-bold">Select Size</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.size || {}).map(([size, stock]) => (
                <label key={size} className="flex items-center">
                  <input
                    className="hidden"
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={handleSizeChange}
                    disabled={stock === 0}
                  />
                  <span
                    className={`flex items-center justify-center w-12 h-12 border rounded-lg cursor-pointer transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-black"
                    } ${stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {size}
                  </span>
                </label>
              ))}
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 my-4 lg:w-[100%]">
              <button
                className="w-[100%] transition-all ease-in-out duration-300 bg-black border text-white py-2 px-4 rounded flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-[1px]"
                onClick={AddtoCart}
              >
                <i className="fa-solid fa-bag-shopping mr-2"></i> Add To CART
              </button>

              <button
                className="w-[100%] transition-all ease-in-out duration-300 border border-green-600 text-green-600 py-2 px-4 rounded flex items-center justify-center hover:bg-green-500 hover:text-white"
                onClick={addtoWishlist}
              >
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
