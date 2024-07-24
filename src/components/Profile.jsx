import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delWishlist as delwish, getWishlist } from "../features/wishlist/wishSlice";
export default function Profile() {
  const navigate = useNavigate();

  function handleLogout() {
    console.log("kadkja");
    return navigate("/");
  }
  


 return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        
        <div className="hidden lg:flex flex-col text-center bg-white sticky top-10 p-4 space-y-4">
          <Link to="orders">My Orders</Link>
          <hr />
          <Link to="account">Account Settings</Link>
          <hr />
          <Link to="address">Address</Link>
          <hr />
          <Link to="wishlist">Wishlist</Link>
          <hr />
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </div>

        <div
          id="mainbox"
          className="md:col-span-3 row-span-4 overflow-auto mb-8"
        >
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="orders" element={<Orders />} />
            <Route path="account" element={<Account />} />
            <Route path="address" element={<Address />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </div>

      <BottomCard />
    </>
  );
}

function Orders() {
  return (
    <>
      <h2 className="text-2xl my-1">Orders</h2>
      <hr className="mb-4" />

      
    </>
  );
}

function Account() {
  const [editing, setediting] = useState(true);

  const [data, setdata] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    mobile: "",
  });

  const editData = () => {
    console.log(data);
    setediting(!editing);
  };

  return (
    <div className="account  bg-white">
      <div className="personalinfo">
        <h2 className="text-2xl my-1">
          Personal Information{" "}
          {editing && (
            <button
              className="edit-btn  p-2 ml-4 text-sm"
              onClick={() => setediting(!editing)}
            >
              Edit
            </button>
          )}
          {!editing && (
            <button className="edit-btn  p-2 ml-4 text-sm" onClick={editData}>
              Save
            </button>
          )}
        </h2>
        <hr className="mb-4" />
        <div className="mt-8">
          <h3 className="text-xl mb-2">Your Name</h3>
          <div className="flex flex-wrap lg:flex-nowrap gap-3">
            <input
              type="text"
              value={data.fname}
              onChange={(e) => setdata({ ...data, fname: e.target.value })}
              id="fname"
              className="border p-2 mb-4  w-full"
              disabled={editing}
            />
            <input
              type="text"
              value={data.lname}
              onChange={(e) => setdata({ ...data, lname: e.target.value })}
              id="lname"
              className="border p-2 mb-4   w-full"
              disabled={editing}
            />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl mb-2">Your Gender</h3>
          <label htmlFor="male" className="mr-4">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            id="male"
            className="mr-4"
            disabled={editing}
            value={data.gender}
            onChange={() => setdata({ ...data, gender: "m" })}
          />
          <label htmlFor="female" className="mr-4">
            Female
          </label>
          <input
            type="radio"
            name="gender"
            id="female"
            disabled={editing}
            value={data.gender}
            onChange={() => setdata({ ...data, gender: "f" })}
          />
        </div>
        <div>
          <h3 className="text-xl mb-2">Email Id</h3>
          <input
            type="text"
            value={"email@email.com"}
            className="border p-2 mb-4 w-full"
            disabled
          />
        </div>
        <div>
          <h3 className="text-xl mb-2">Mobile</h3>
          <input
            type="number"
            className="border p-2 mb-4 w-full"
            disabled={editing}
            value={data.mobile}
            onChange={(e) => setdata({ ...data, mobile: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div className="address p-8 bg-white">
      <h2 className="text-2xl mb-4">Your Addresses</h2>

      <div className="address-card border p-8 mb-4">
        <p>Narasimha | +91 8978106223</p>
        <p>Plot Number 474, Hmt Swarnapuri Colony Miyapur Hyderabad</p>
        <p className="cart-desc btn-group">
          Delete <i className="fa-regular fa-trash-can"></i> | Edit{" "}
          <i className="fa-regular fa-edit"></i>
        </p>
      </div>
      <div className="address-card border p-8 mb-4">
        <p>Narasimha | +91 8978106223</p>
        <p>Plot Number 474, Hmt Swarnapuri Colony Miyapur Hyderabad</p>
        <p className="cart-desc btn-group">
          Delete <i className="fa-regular fa-trash-can"></i> | Edit{" "}
          <i className="fa-regular fa-edit"></i>
        </p>
      </div>
    </div>
  );
}



function Cartcard({obj}) {


  useEffect(()=>{
    dispatch(getWishlist())
  },[])
  

  
 const dispatch = useDispatch()

 const delWish = async()=>{
  await dispatch(delwish(obj._id))
  await dispatch(getWishlist())
 }
  return (
    <div className="flex border-[1px] p-2 mb-1 gap-4">

      <div className="cartimg flex h-28 w-28">
        <Link to={`/product/${obj._id}`} className="h-[100%] w-[100%]">
        <img src={obj.image}  alt="Image" className="h-[100%] w-[100%]" />
        </Link>
      </div>

      <div className="content w-full">
        <div className="flex justify-between w-full">
          <Link to={`/product/${obj._id}`}>
        <h3 className="text-xl font-bold">{obj.name}</h3>
          </Link>
        <button onClick={delWish} className="text-sm">
            <i className="fa-regular fa-trash-can transition-all linear duration-100 hover:scale-105"></i>
          </button>

        </div>
        
        <p className="text-slate-800">by {obj.brand}</p>
        <p className="text-slate-800">{obj.description}</p>
        <h3 className="text-slate-800 text-xl font-bold">{obj.price}</h3>
      </div>
    </div>
  );
}

function Wishlist() {
  const dispatch =  useDispatch()

  useEffect(()=>{
    dispatch(getWishlist())
    console.log();
  },[])
  const items = useSelector((state)=>state.wish.wishlist)
  console.log(items);
  return (
    <>
      <h2 className="text-2xl my-1">Wishlist</h2>
      <hr className="mb-4" />
      {
        items.map(e=><Cartcard key={e._id} obj={e.productId} />)
      }
    </>
  );
}

function BottomCard() {
  return (
    <div className="z-10 bottom-card w-full bg-white flex items-center justify-around fixed bottom-0 lg:hidden">
      <Link to="orders">
        <i className="fa-solid fa-box text-2xl p-4"></i>
      </Link>
      <Link to="account">
        <i className="fa-regular fa-circle-user text-2xl p-4"></i>
      </Link>
      <Link to="wishlist">
        <i className="fa-regular fa-heart text-2xl p-4"></i>
      </Link>
      <Link to="address">
        <i className="fa-regular fa-address-book text-2xl p-4"></i>
      </Link>
    </div>
  );
}
