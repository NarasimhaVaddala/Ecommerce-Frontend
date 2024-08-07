import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, deleteItemFromCart, getCart } from "../features/cart/cartSlice";
import { addToWishlist as addwish, getWishlist } from "../features/wishlist/wishSlice";
import { toast, ToastContainer } from "react-toastify";
import UserContext from "../app/context";
import { getDetails, placeOrder } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";





//Main Page Starts Here
export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  const { setLoading, loading } = useContext(UserContext)

  useEffect(() => {

    (
      async function () {
        setLoading(true)
        await dispatch(getCart())
        setLoading(false)

      }
    )()
  }, [])

  return (
    <>
      {items.length && !loading ? (
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Addressbox />
          <div className="lg:col-span-2 flex flex-col gap-6">
            {items && items.map(e => <Cartcard key={e._id} obj={e} />)}
          </div>
          <Pricebox noOfItems={items.length} />
        </div>
      ) : (
        <h2 className="h-[80vh] flex items-center justify-center font-bold text-3xl">
          No Items in Cart Go and add Items to Proceed
        </h2>
      )}
    </>
  );
}
//Main Page Ends Here


// PriceBox Starts Here
function Pricebox(props) {
  const priceDetails = useSelector((state) => state.cart.priceDetails);
  const address = useSelector((state) => state.user.address);  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  async function buyNow() {

    if (!address.name || !address.mobile || !address.pincode || !address.addr) {
      alert("Please add Delivery Address")
    }
    else {

      await dispatch(placeOrder("order"))
      return navigate('/profile')
    }
  }



  return (
    <div className="bg-white p-4 sticky top-4 lg:col-start-3 lg:row-start-1">
      <h2 className="text-lg font-bold ">DETAILS</h2>
      <hr />
      <p className="flex justify-between mb-1 text-lg">
        <span>Price ({props.noOfItems} Items)</span>
        <span>{priceDetails.priceForItems}/-</span>
      </p>
      <p className="flex justify-between mb-1 text-lg">
        <span>Delivery Charges</span>
        {priceDetails.deliveryCharges ? <span>{priceDetails.deliveryCharges}/-</span> : <span>Free Delivery</span>}
      </p>
      <p className="flex justify-between mb-1 text-lg">
        <span>Packaging Fee</span>
        <span>{priceDetails.packagingFee}/-</span>
      </p>
      <p className="flex justify-between mb-1 text-lg font-bold">
        <span>Total Amount</span>
        <span>{priceDetails.totalPrice}/-</span>
      </p>
      <button onClick={buyNow} className="transition-all ease-in-out duration-300 bg-black border text-white py-2 px-4 rounded flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-[1px] w-full">
        Buy Now
      </button>
    </div>
  );
}
// PriceBox Ends Here




// Address Box Starts here
const Addressbox = React.memo(() => {
  const address = useSelector((state) => state.user.address);
  const dispatch = useDispatch();

  const [add, setAdd] = useState({ name: "", mobile: "", addr: "", pincode: "" });

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDetails());
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (address) {
      setAdd({ ...address });
    }
  }, [address]);

  // console.log(address);

  return (
    <div className="bg-white p-4 flex flex-col justify-between lg:col-span-2 lg:row-auto lg:mb-0">
{(add.name && add.mobile && add.addr && add.pincode)&&
      <div>
        <h2 className="text-lg mb-1 font-bold">
          Deliver To {add.name} | +91 {add.mobile}
        </h2>
        <p className="text-lg">
          {add.addr}
        </p>
        <p className="text-lg">{add.pincode}</p>
      </div>}

      <Link to='/profile/account'
        className="transition-all 
      ease-in-out duration-300 border border-green-600 
      text-green-600 py-2 px-4 rounded flex items-center justify-center
       hover:bg-green-500 hover:text-white font-bold">
        {(!add.name || !add.mobile || !add.addr || !add.pincode)?<span>Add Delivery Address</span>: <span>Edit or change Address</span>}
      </Link>
    </div>
  );
});
// Address Box Starts here



//Card Starts Here
function Cartcard(props) {
  const { obj } = props;
  const [qty, setqty] = useState(obj.quantity); // initialize with obj.qty
  const dispatch = useDispatch();
  const { loading, setLoading } = useContext(UserContext)

  const wishlist = async () => {
    await dispatch(addwish(obj.productId._id));
    toast.info("Added to Wishlist");
  };

  const increase = async () => {
    if (obj.quantity >= 5)return toast.error("Cannot add More Than 5 quantity")
    else {
      setLoading(true)
      await dispatch(addToCart({ productId: obj.productId._id, quantity: 1, size: obj.size }));
      await dispatch(getCart())
      setqty(prevQty => {
        const newQty = prevQty < 5 ? prevQty + 1 : prevQty;
        return newQty;
      });
      setLoading(false)
    }
  };

  const decrease = async () => {
    setLoading(true)
    await dispatch(decreaseQuantity({ productId: obj.productId._id, size: obj.size }));
    await dispatch(getCart())
    setqty(prevQty => {
      const newQty = prevQty > 1 ? prevQty - 1 : prevQty;
      return newQty;
    });
    setLoading(false)
  };


  const deleteCart = async () => {
    setLoading(true)
    await dispatch(deleteItemFromCart({ productId: obj.productId._id, size: obj.size }))
    await dispatch(getCart())
    setLoading(false)
  }

  return (
    <div className="flex border p-2 mb-1">
      <div className="flex h-full w-28">
        <img src={obj.productId.image} alt="image" className="h-full w-full" />
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold">{obj.productId.name}</h3>
          <div className="flex justify-start gap-x-4 items-center my-1">
            <button onClick={deleteCart} className="text-sm">
              <i className="fa-regular fa-trash-can transition-all linear duration-100 hover:scale-105"></i>
            </button>
            <span>|</span>
            <button className="text-sm" onClick={wishlist}>
              <i className="fa-regular fa-heart transition-all linear duration-100 hover:scale-105 hover:text-red-600"></i>
            </button>
            <ToastContainer />
          </div>
        </div>
        <p>Size : {obj.size}</p>
        {/* Buttons for Increasing or Decreasing the quantity of the product */}
        <div className="flex justify-start gap-x-4 items-center my-1">

          <span>Qty</span>

          <button className="border-[1px] flex items-center justify-center border-black h-4 w-4 rounded-full" onClick={decrease}>-</button>
          <span>{qty}</span>
          <button disabled={qty == 5} className="border-[1px] flex items-center justify-center border-black h-4 w-4 rounded-full disabled:border-gray-500" onClick={increase}>+</button>
        </div>
        {/* Buttons for Increasing or Decreasing the quantity of the product */}
        <p className="font-bold">₹ {obj.productId.price * qty}/-</p>

      </div>
    </div>
  );
}
//Card Ends Here




//order Functionality
