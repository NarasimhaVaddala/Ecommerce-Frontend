import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCart } from "../features/cart/cartSlice";
import { addToWishlist as add } from "../features/wishlist/wishSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "../app/context";

const token = localStorage.getItem('token')


export default function DetailedProductView() 
{
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const { id } = useParams();
  const [data, setData] = useState({});
  const {isAuthenticated , setLoading , loading} = useContext(UserContext)
  
  const handleSizeChange = (event) => setSelectedSize(event.target.value);


  //Function To add Item to Wishlist
  const addtoWishlist = () => {
    if(!isAuthenticated)return navigate('/login')
    if (!data) toast.error("Something Went Wrong! Please Try Later");
    else {
      setLoading(true)
      dispatch(add(id));toast.success("Added To Wishlist")
      setLoading(false)
    }
  };




//Function to Add Item to Cart
  const AddtoCart = async() => {
    
    if(!isAuthenticated)return navigate('/login')
    if (!selectedSize) toast.warn("Please Select Size")
    // else if (items.find(e => e._id === id))toast.info("This item is already added to cart")     
    // else if (items.length >= 9) toast.error("Cart is Full")
    else{
      setLoading(true)
      await dispatch(addToCart({ productId:id, quantity:1 ,size:selectedSize}))
      await dispatch(getCart())
      toast.success("Added To Cart");
      setSelectedSize("");
      setLoading(false)
      
    }
  };


//Function to Fetch a single product from Api using Its Id
  const getData = async() => {
    setLoading(true)
    await axios
    .get(`http://localhost:3000/products/product/${id}`)
    .then((res) => setData(res.data.data[0]))
    .catch((err) => toast.error(err.message));
    setLoading(false)
  };


//UseEffect
  useEffect(() => {
    getData();
  }, []);

  return (
    <>{!loading &&
      
      <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Image  */}
            <div className="flex justify-center items-center">
              <img className="lg:w-[80%]" src={data.image} alt="image" />
            </div>
    

            {/* Content Which will go To right according to grid*/}
            <div>         
                  <h2 className="text-2xl font-bold">{data.name}</h2>
                  <p className="font-semibold text-gray-600">{data.brand}</p>
                  <p>{data.description}</p>
                  <h2 className="text-2xl font-bold my-2">₹ {data.price}/-</h2>
                  <p>Inclusive of all Taxes</p>
                  <hr className="mb-2"/>

                  <h2 className="text-xl font-bold">Select Size</h2>
                {/* Size Radio Buttons will fetch according to data from api, Button will be Diabled if That stock less Than Zero */}            
                  <div className="flex flex-wrap gap-2">
                     {Object.entries(data.size || {}).map(([size, stock]) => (
                      <Sizeradiobtn key={size} size={size} callback={handleSizeChange} selectedSize={selectedSize} stock={stock} />                  
                      ))}
                  </div>
              
            


              {/* Add to Cart and Wishlist Buttons */}
              <div className="flex flex-wrap lg:flex-nowrap gap-4 my-4 lg:w-[100%]">
                    
                    <AddButton text="ADD TO CART" callback={AddtoCart} icon="fa-solid fa-bag-shopping mr-2" color="bg-black border text-white py-2 px-4 rounded flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-[1px]"/>
                    <AddButton text="ADD TO WISHLIST" callback={addtoWishlist} icon="fa-regular fa-heart mr-2" color="border border-green-600 text-green-600 py-2 px-4 rounded flex items-center justify-center hover:bg-green-500 hover:text-white" />
                    <ToastContainer />
              </div>
             
              <hr />


              {/* Additional Info */}
              <BottomContent image="https://images.bewakoof.com/web/ic-star-offer.svg" title="100% Pure Cotton" content="Best In This Price Segment" />
              <hr />
              <BottomContent image="https://images.bewakoof.com/web/ic-return.svg" title="15 Days Return and Exchange" content="Know More about return policy | contact us" />           
              <hr />
              <div className="flex justify-between items-center my-2">              
                <BottomIcon icon="fa-solid fa-shield-cat" text="Secure Payments" />
                <BottomIcon icon="fa-solid fa-hand-holding-dollar" text="Instant Refunds" />
                <BottomIcon icon="fa-regular fa-circle-check" text="100% Genuine product" /> 
              </div>
          


            </div>
         
          </div>




      </div>
    }
    </>
  );
}


function BottomContent({image , title , content}){
  return (
    <div className="flex items-center gap-4 my-2">
    <img src={image} alt="return"/>
    <div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  </div>

 
      
  )
}


function AddButton({text , callback , icon , color}){
    return   <button className={`w-[100%] transition-all ease-in-out duration-300 ${color}`} onClick={callback}> <i className={icon}></i> {text} </button>
}


function BottomIcon({icon , text}){
  return (
    <div className="flex flex-col items-center text-center"  >
    <i className={`${icon} text-4xl`}></i>
    <p className="mt-2">{text}</p>
  </div>
  )
}


function Sizeradiobtn({size , selectedSize, callback , stock}){
  return (
    <label className="flex items-center">
        <input className="hidden" type="radio" name="size" value={size} checked={selectedSize === size} onChange={callback} disabled={stock === 0}/>
         <span className={`flex items-center justify-center w-12 h-12 border rounded-lg cursor-pointer transition ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-black"
                      } ${stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {size}
          </span>
    </label>
  )
}