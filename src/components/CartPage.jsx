import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { del } from '../features/cart/cartSlice';

export default function CartPage() {
    const items = useSelector((state) => state.cart.items);
    const length = items.length;
    const Totalprice = items.reduce((acc, cur, index,arr )=>{
        return acc+cur.price
    },0) 
    return (<>
    

       {
        length?<div className='container grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <Addressbox />
        <div className='lg:col-span-2 flex flex-col gap-6'>
            {items && items.map((e) => (
                <Cartcard2 key={e.id} id={e.id} size={e.size} title={e.title} description={e.description} price={e.price} img={e.img} />
            ))}
        </div>
        <Pricebox length={length} price={Totalprice}/>
    </div>:<h2 className='flex items-center justify-center font-bold'>
        No Items in Cart Go and add Items to Proceed
    </h2>

       }
                </>
    )
}







function Pricebox(props) {
    return (
        <div className="bg-white p-4 sticky top-4 lg:col-start-3 lg:row-start-1">
            <h2 className="text-lg font-bold ">DETAILS</h2>
            <hr />
            <p className="flex justify-between mb-1 text-lg"><span>Price ({props.length} Items)</span> <span>{props.price}/-</span></p>
            <p className="flex justify-between mb-1 text-lg"><span>Delivery Charges</span> <span>Free Delivery</span></p>
            <p className="flex justify-between mb-1 text-lg"><span>Packaging Fee</span> <span>59/-</span></p>
            <p className="flex justify-between mb-1 text-lg font-bold"><span>Total Amount</span> <span>{props.price + 59}/-</span></p>
            <button className="transition-all ease-in-out duration-300 bg-black border text-white py-2 px-4 rounded flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-[1px] w-full">Buy Now</button>
        </div>
    );
}

function Addressbox() {
    return (
        <div className="bg-white p-4 flex flex-col justify-between lg:col-span-2 lg:row-auto lg:mb-0">
            <div>
                <h2 className="text-lg mb-1 font-bold">Deliver To Narasimha | +91 8978106223</h2>
                <p className="text-lg">Plot Number 474 HMT Swarnapuri Colony, Miyapur, Hyderabad, Telangana</p>
                <p className="text-lg">500049</p>
            </div>
            <button className=" transition-all ease-in-out duration-300 border border-green-600 text-green-600 py-2 px-4 rounded flex items-center justify-center hover:bg-green-500 hover:text-white font-bold">Edit or Change Address</button>
        </div>
    );
}

function Cartcard2(props) {
    const { title, description, price, size, img, id } = props;
    const dispatch = useDispatch();
    return (
        <div className="flex border p-2 mb-1">
            <div className="flex h-28 w-28">
                <img src={img} alt="" className="h-full w-3/4" />
            </div>
            <div className="ml-4">
                <h3 className="text-xl">{title}</h3>
                <p className="text-slate-800">{description}</p>
                <p>Status : Pending</p>
                <p>{price}</p>
                <p>{size}</p>
                <p>View Details</p>
                <div className='flex items-center space-x-2'>
                    <button onClick={() => dispatch(del({ id: id }))} className="text-xl">
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                    <button className="text-xl">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
