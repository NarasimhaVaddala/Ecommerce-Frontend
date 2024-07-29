import React, { useContext, useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delWishlist as delwish, getWishlist } from "../features/wishlist/wishSlice";
import UserContext from "../app/context";
import { editDetails, getDetails } from "../features/user/userSlice";
import { useForm } from "react-hook-form";
export default function Profile() {
  const navigate = useNavigate();

  const { isAuthenticated, logout, loading, setLoading } = useContext(UserContext);


  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">

        <div className="hidden lg:flex flex-col text-center bg-white sticky top-10 p-4 space-y-4 font-semibold">
          <Link to="orders">My Orders</Link>
          <hr />
          <Link to="account">Account Settings</Link>
          <hr />
          {/* <Link to="address">Address</Link>
          <hr /> */}
          <Link to="wishlist">Wishlist</Link>
          <hr />
          <button onClick={logout}>
            Logout
          </button>
        </div>

        <div
          id="mainbox"
          className="md:col-span-3 row-span-4 overflow-auto mb-8"
        >
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="orders" element={<Orders />} />
            <Route path="account" element={<Account />} />
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

// function Account() {

//   const [editing, setediting] = useState(true);
//   const userData = useSelector((state) => state.user.details);
//   console.log(userData , "from init account");
//   const dispatch = useDispatch()

//   const { register, handleSubmit, formState: { errors } } = useForm();



//   const [data, setdata] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     mobile: "",    

//   });

//   const [adData, setadData] = useState({
//     addr: "",
//     name: "",
//     mobile: "",
//     pincode: ""
//   })

//   useEffect(() => {

//     async function getDta(){

//       await dispatch(getDetails())
//       if (userData) {
//         console.log(userData, " from useefecr");
//         setdata({
//           first_name: userData.first_name,
//             last_name: userData.last_name,
//             email: userData.email ,
//             mobile: userData.mobile,
//             address: userData.address || {}
//           });
//           setadData({
//             name: userData.address?.name || "",
//             mobile: userData.address?.mobile || "",
//             pincode: userData.address?.pincode || "",
//             addr: userData.address?.addr || ""
//           });
//         }
//       }
//       getDta()

//   }, [])

//   const editData = async() => {
//     console.log({...adData, ...data});
//     await dispatch(editDetails({first_name:data.first_name ,last_name:data.last_name,mobile:data.mobile , address:{...adData} }))
//     console.log(data);
//     setediting(!editing);
//   };

//   return (
//     <div className="account  bg-white">
//       <div className="personalinfo">
//         <h2 className="text-2xl my-1 font-bold">
//           Personal Information{" "}
//           {editing && (
//             <button
//               className="edit-btn  p-2 ml-4 text-sm"
//               onClick={() => setediting(!editing)}
//             >
//               Edit
//             </button>
//           )}
//           {!editing && (
//             <button className="edit-btn  p-2 ml-4 text-sm" onClick={editData}>
//               Save
//             </button>
//           )}
//         </h2>
//         <hr className="mb-4" />
//         <div className="mt-8">
//           <h3 className="text-xl mb-2 font-bold">Your Name</h3>
//           <div className="flex flex-wrap lg:flex-nowrap gap-3">
//             <input
//               type="text"
//               value={data.first_name}
//               onChange={(e) => setdata({ ...data, first_name: e.target.value })}
//               id="fname"
//               className="border p-2 mb-4  w-full"
//               disabled={editing}
//             />
//             <input
//               type="text"
//               value={data.last_name}
//               onChange={(e) => setdata({ ...data, last_name: e.target.value })}
//               id="lname"
//               className="border p-2 mb-4   w-full"
//               disabled={editing}
//             />
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl mb-2 font-bold">Email Id</h3>
//           <input
//             type="text"
//             value={data.email}
//             className="border p-2 mb-4 w-full"
//             disabled
//           />
//         </div>
//         <div>
//           <h3 className="text-xl mb-2 font-bold">Mobile</h3>
//           <input
//             type="number"
//             className="border p-2 mb-4 w-full"
//             disabled={editing}
//             value={data.mobile}
//             onChange={(e) => setdata({ ...data, mobile: e.target.value })}
//           />
//         </div>

//         <div>
//           <h3 className="text-xl mb-2 font-bold">Address to Deliver</h3>

//           <div className="address-card border p-4 mb-4">
//             <input
//               type="text"
//               className="border p-2 mb-4 w-full"
//               disabled={editing}
//               placeholder="Recievers Name"

//               value={adData.name}
//               onChange={(e) => setadData({ ...adData, name: e.target.value })}
//             />

//             <input
//               type="number"
//               className="border p-2 mb-4 w-full"
//               disabled={editing}
//               placeholder="Deivery Mobile Number"             
//               value={adData.mobile}
//               onChange={(e) => setadData({ ...adData, mobile: e.target.value })}

//             />
//             <input
//               type="number"
//               className="border p-2 mb-4 w-full"
//               disabled={editing}
//               placeholder="Pincode"              
//               value={adData.pincode}
//               onChange={(e) => setadData({ ...adData, pincode: e.target.value })}

//             />

//             <textarea 
//               value={adData.addr} 
//               onChange={(e) => setadData({ ...adData,addr:e.target.value })} disabled={editing} className="p-2 mb-4 w-full" placeholder="Full Address">

//             </textarea>




//           </div>
//         </div>




//       </div>
//     </div>
//   );
// }





function Cartcard({ obj }) {


  useEffect(() => {
    dispatch(getWishlist())
  }, [])



  const dispatch = useDispatch()

  const delWish = async () => {
    await dispatch(delwish(obj._id))
    await dispatch(getWishlist())
  }
  return (
    <div className="flex border-[1px] p-2 mb-1 gap-4">

      <div className="cartimg flex h-28 w-28">
        <Link to={`/product/${obj._id}`} className="h-[100%] w-[100%]">
          <img src={obj.image} alt="Image" className="h-[100%] w-[100%]" />
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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWishlist())
    
  }, [])
  const items = useSelector((state) => state.wish.wishlist)
  console.log(items);
  return (
    <>
      <h2 className="text-2xl my-1">Wishlist</h2>
      <hr className="mb-4" />
      {
        items.map(e => <Cartcard key={e._id} obj={e.productId} />)
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



function Account() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.user.details);
  const address = useSelector((state) => state.user.address);
  const [det, setdet] = useState({ first_name: "", last_name: "", email: "", mobile: "" });
  const [add, setadd] = useState({ name: "", mobile: "", addr: "", pincode: "" });
  const [editing , setediting] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDetails());
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (details) {
      setdet({ ...details });
    }
    if (address) {
      setadd({ ...address });
    }
  }, [details, address]);

  const handleSave = async() => {
    await dispatch(editDetails({ first_name: det.first_name, last_name: det.last_name, mobile: det.mobile, address: add }));
    setediting(true)
  };

  return (
    <div>
      <div className="flex justify-between">
        
      <h2 className="text-xl font-bold">Personal Details</h2>
      {editing && <button className="mt-4 p-2 bg-blue-500 text-white" onClick={()=>setediting(false)}>Edit</button>}
      {!editing && <button className="mt-4 p-2 bg-blue-500 text-white" onClick={handleSave}>save</button>}
      
      </div>
      <div className="flex w-full gap-2 mt-4 flex-wrap md:flex-nowrap">
        <input
          type="text"
          className="border-[1px] border-black w-full my-2 p-4 md:p-2"
          placeholder="First Name"
          value={det.first_name}
          onChange={(e) => setdet({ ...det, first_name: e.target.value })}
          disabled={editing}
        />
        <input
          type="text"
          className="border-[1px] border-black w-full my-2 p-4 md:p-2"
          placeholder="Last Name"
          value={det.last_name}
          onChange={(e) => setdet({ ...det, last_name: e.target.value })}
          disabled={editing}
        />
      </div>

      <div>
        <input
          type="email"
          className="border-[1px] border-black w-full p-4 md:p-2 my-2"
          placeholder="Email"
          value={det.email}
          onChange={(e) => setdet({ ...det, email: e.target.value })}
          disabled
        />
        <input
          type="number"
          className="border-[1px] border-black w-full p-4 md:p-2 my-2"
          placeholder="Mobile"
          value={det.mobile}
          onChange={(e) => setdet({ ...det, mobile: e.target.value })}
          disabled={editing}
        />
      </div>

      <h2 className="text-xl font-bold mt-4">Address</h2>
      <div className="mt-2">
        <input
          type="text"
          className="border-[1px] border-black w-full my-2 p-4 md:p-2"
          placeholder="Receiver's Name"
          value={add.name}
          onChange={(e) => setadd({ ...add, name: e.target.value })}
          disabled={editing}
        />
        <input
          type="number"
          className="border-[1px] border-black w-full my-2 p-4 md:p-2"
          placeholder="Receiver's Mobile"
          value={add.mobile}
          onChange={(e) => setadd({ ...add, mobile: e.target.value })}
          disabled={editing}
        />
        <textarea
          className="border-[1px] border-black w-full my-2 p-4 md:p-2"
          placeholder="Address"
          value={add.addr}
          onChange={(e) => setadd({ ...add, addr: e.target.value })}
          disabled={editing}
        ></textarea>
        <input
          type="number"
          className="border-[1px] border-black w-full my-2 p-4 md:p-2"
          placeholder="Pincode"
          value={add.pincode}
          onChange={(e) => setadd({ ...add, pincode: e.target.value })}
          disabled={editing}
        />
      </div>
    </div>
  );
}
