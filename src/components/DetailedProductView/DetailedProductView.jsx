import React from 'react'
import "./DetailedProductView.css"
import { useNavigate } from 'react-router-dom'
export default function DetailedProductView() {


    const navigate = useNavigate()

    const AddtoCart = ()=>{
        return navigate('/cart')
    }
    
    
    return (



        <>

            <div className="container ">

                <div className="grid grid-two--cols">

                    <div className="imgbox">
                        <img src="https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg" alt="" />
                    </div>


                    <div className="contentbox">
                        <h2>Product Name</h2>
                        <h2>₹ 1,799</h2>
                        <p>Inclusive of all Taxes</p>

                        <hr />

                        <h2>Select Size</h2>

                        <div className="radio-inputs">

                            <label>
                                <input className="radio-input"  type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-icon">
                                    </span>
                                    <span className="radio-label">S</span>
                                </span>
                            </label>

                           

                            <label>
                                <input className="radio-input" type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-icon">

                                    </span>
                                    <span className="radio-label">M</span>
                                </span>
                            </label>
                            <label>
                                <input className="radio-input" type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-icon">

                                    </span>
                                    <span className="radio-label">L</span>
                                </span>
                            </label>
                            <label>

                                <input className="radio-input" type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-icon">

                                    </span>
                                    <span className="radio-label">XL</span>
                                </span>
                            </label>
                            <label>

                                <input className="radio-input" type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-icon">

                                    </span>
                                    <span className="radio-label">XXL</span>
                                </span>
                            </label>


                        </div>


                        <div className="btn-group">
                            <button className="cart-btn" onClick={AddtoCart}>
                                <i className="fa-solid fa-bag-shopping"></i>   Add To CART
                            </button>
                           

                            <button className="cart-btn add-to-wishlist">
                                <i className="fa-regular fa-heart"></i>  Add To Wishlist
                            </button>
                        </div>

                        <hr />

                        <div className="return-exchange">
                            <img src="https://images.bewakoof.com/web/ic-star-offer.svg" alt="return" />
                            <div>

                                <p>100% Pure Cotton</p>
                                <p>Best In This Price Segment</p>
                            </div>
                        </div>

                        <hr />

                        <div className="return-exchange">
                            <img src="https://images.bewakoof.com/web/ic-return.svg" alt="return" />
                            <div>

                                <p>15 Days Return and Exchange</p>
                                <p>Know More about return policy | contact us</p>
                            </div>
                        </div>

                        <hr />



                        <div className="secure-info">
                            <div >
                            <i className="fa-solid fa-shield-cat"></i>
                                 <p>Secure <br /> Payments</p>
                            </div>
                            <div >
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                                <p>Instant <br /> Refuds</p>
                            </div>
                            <div ><i className="fa-regular fa-circle-check"></i>
                                <p>100% <br /> Genuine product</p>
                            </div>
                        </div>

                    </div>




                </div>



            </div>

        </>
    )
}
