import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

export default function ProductCard() {
    return (
        <Link to="/productview">
            <div className='productcard'>

                <img src="https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg" alt="" />


                <p className="textbox capitalise" >
                    <span>₹ <strong>299/-</strong></span>

                    <span><i className="fa-regular fa-heart" ></i></span>
                </p>

                <p className='textbox capitalise'>
                    Black Tshirt
                </p>





            </div>

        </Link>
    )
}
