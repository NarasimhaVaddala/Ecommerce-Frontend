import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../features/cart/cartSlice";
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
        <span>{priceDetails.priceForItems }/-</span>
      </p>
      <p className="flex justify-between mb-1 text-lg">
        <span>Delivery Charges</span>
        {priceDetails.deliveryCharges? <span>{priceDetails.deliveryCharges}/-</span> : <span>Free Delivery</span>}
      </p>
      <p className="flex justify-between mb-1 text-lg">
        <span>Packaging Fee</span> <span>{priceDetails.packagingFee}</span>
      </p>
      <p className="flex justify-between mb-1 text-lg font-bold">
        <span>Total Amount</span> <span>{priceDetails.totalPrice}/-</span>
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
function Cartcard(props) {
  const {obj} = props;
  const dispatch = useDispatch();

  const wishlist = () => {   
    dispatch(addwish(props));
    toast.success("Added to Wishlist");
  };

  return (
    <div className="flex border p-2 mb-1">
      <div className="flex h-28 w-28">
        <img src={obj.image} alt="image" className="h-full w-3/4" />
      </div>
      <div className="ml-4">
        <h3 className="text-xl">{obj.name}</h3>
        <p className="text-slate-800">{obj.description}</p>

        <p>Rs {obj.price}/-</p>
        <p>Size : {obj.size}</p>

        <div className="flex items-center gap-4">
          <button onClick={() => dispatch(del({ id: obj._id }))} className="text-sm">
            <i className="fa-regular fa-trash-can transition-all linear duration-100 hover:scale-105"></i>
          </button>
          |
          <button className="text-sm" onClick={wishlist}>
            <i className="fa-regular fa-heart transition-all linear duration-100 hover:scale-105 hover:text-red-600"></i>
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
//Card Endss Here

