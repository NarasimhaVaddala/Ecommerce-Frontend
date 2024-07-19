import React , { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { del, qty as quantity } from "../features/cart/cartSlice";
import { add as addwish } from "../features/wishlist/wishSlice";
import { toast, ToastContainer } from "react-toastify";




//Main Page Starts Here
export default function CartPage() {
  const items = useSelector((state) => state.cart.items); 
  return (
    <>
      {items.length ? (
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Addressbox />
          <div className="lg:col-span-2 flex flex-col gap-6">
            {items && items.map(e=><Cartcard key={e._id} obj={e}/>)}
          </div>
          <Pricebox noOfItems={items.length} />
        </div>
      ) : (
        <h2 className="h-[80vh] flex items-center justify-center font-bold">
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
        {priceDetails.deliveryCharges? <span>{priceDetails.deliveryCharges}/-</span> : <span>Free Delivery</span>}
      </p>
      <p className="flex justify-between mb-1 text-lg">
        <span>Packaging Fee</span>
        <span>{priceDetails.packagingFee}/-</span>
      </p>
      <p className="flex justify-between mb-1 text-lg font-bold">
        <span>Total Amount</span> 
        <span>{priceDetails.totalPrice}/-</span>
      </p>
      <button className="transition-all ease-in-out duration-300 bg-black border text-white py-2 px-4 rounded flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-[1px] w-full">
        Buy Now
      </button>
    </div>
  );
}
// PriceBox Ends Here




// Address Box Starts here
function Addressbox() {
  return (
    <div className="bg-white p-4 flex flex-col justify-between lg:col-span-2 lg:row-auto lg:mb-0">
      <div>
        <h2 className="text-lg mb-1 font-bold">
          Deliver To Narasimha | +91 8978106223
        </h2>
        <p className="text-lg">
          Plot Number 474 HMT Swarnapuri Colony, Miyapur, Hyderabad, Telangana
        </p>
        <p className="text-lg">500049</p>
      </div>
      <button className=" transition-all ease-in-out duration-300 border border-green-600 text-green-600 py-2 px-4 rounded flex items-center justify-center hover:bg-green-500 hover:text-white font-bold">
        Edit or Change Address
      </button>
    </div>
  );
}
// Address Box Starts here



//Card Starts Here
//Card Starts Here
function Cartcard(props) {
  const { obj } = props;
  const [qty, setqty] = useState(obj.qty); // initialize with obj.qty
  const dispatch = useDispatch();

  const wishlist = () => {
    dispatch(addwish(obj));
    toast.info("Added to Wishlist");
  };

  const increase = () => {
    setqty(prevQty => {
      const newQty = prevQty < 5 ? prevQty + 1 : prevQty;
      dispatch(quantity({ qty: newQty, id: obj._id }));
      return newQty;
    });
  };

  const decrease = () => {
    setqty(prevQty => {
      const newQty = prevQty > 1 ? prevQty - 1 : prevQty;
      dispatch(quantity({ qty: newQty, id: obj._id }));
      return newQty;
    });
  };

  return (
    <div className="flex border p-2 mb-1">
      <div className="flex h-full w-28">
        <img src={obj.image} alt="image" className="h-full w-full" />
      </div>
      <div className="ml-4 w-full">
        <div className="flex justify-between items-center w-full">
            <h3 className="font-bold">{obj.name}</h3>
            <div className="flex justify-start gap-x-4 items-center my-1">
              <button onClick={() => dispatch(del({ id: obj._id }))} className="text-sm">
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
          <button className="border-[1px] flex items-center justify-center border-black h-4 w-4 rounded-full" onClick={increase}>+</button>
        </div>
        {/* Buttons for Increasing or Decreasing the quantity of the product */}
        <p className="font-bold">₹ {obj.price * qty}/-</p>
        
      </div>
    </div>
  );
}
//Card Ends Here



