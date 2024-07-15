import React from 'react'
import { Link } from "react-router-dom";


export default function Card({ price, img, category, url, brand, name }) {
  return (
    <Link to={`${url}`}>
      <div className={`flex flex-col mt-4 md:h-96 hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300 ${!category && 'shadow-xl'} ${!category && 'md:h-[auto]'}`}>

        <div className="h-[95%] shadow-lg">
          <img className="w-[100%] h-[100%] " src={img} alt="Rashmika" />
        </div>

       {category && <p className="font-semibold text-slate-500  mt-1 text-sm ">
          <span className="capitalize">{category}</span> starting at
          <strong>{price}</strong>
        </p>}
        {brand && <p className='font-bold px-2 mt-2 flex justify-between'><span>{brand}</span><i className='fa-regular fa-heart hover:text-red-600 hover:scale-110'></i></p>}
        {name && <p className='font-semibold text-slate-600 px-2'>{name}</p>}
        {!category && <p className='font-extrabold text-xl text-slate px-2'>Rs {price}/-</p>}
      </div>
    </Link>
  )
}
