import React from 'react'
import "./CartPage.css"
export default function CartPage() {
    return (
        <>
            <div className='cart-page container grid grid-three--cols'>

                <Addressbox/>

               
                <Cartcard />
                <Cartcard />
                <Cartcard />
                <Cartcard />
                <Cartcard />


                <Pricebox />

            </div>
        </>
    )
}



function Cartcard() {

    return (
        <>
            <div className="cartcard">


                <div className="cart-img">


                    <img src="https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg" alt="" />
                </div>
                <div className="cart-content">
                    <h2>ITEM HEADING</h2>

                    <p className="cart-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum beatae </p>

                    <p className='cart-desc'>Qty 1</p>

                    <h2 className="price">Rs. 1799</h2>

                </div>
            </div>

        </>
    )

}



function Pricebox() {
    return (
        <div className="pricebox">
            <h2>DETAILS</h2>
            <hr />
            <p><span>Price (1 Items)</span>    <span>1799/-</span></p>
            <p><span>Delivery Charges</span>    <span>Free Delivery</span></p>
            <p><span>Packaging Fee</span>    <span>59/-</span></p>
            <p><span>Total Amount</span>    <span>2000/-</span></p>



            <button className="cart-btn" >
                Buy Now
            </button>
        </div>
    )
}


function Addressbox(){

    return (
    <div className="addresscard">
        <div>
        <h3>Deliver To Narasimha</h3>
        <p>Plot Number 474 hmt swarnapuri Colont , Miyapur , Hyderabad, Telangana</p>
        <p>500049</p>
        </div>

        <button className="cart-btn add-to-wishlist">
                Edit or Change Address
            </button>


    </div>)
}