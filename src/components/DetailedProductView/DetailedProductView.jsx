import React from 'react'
import "./DetailedProductView.css"
export default function DetailedProductView() {


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

                        <div class="radio-inputs">

                            <label>
                                <input class="radio-input" type="radio" name="engine" />
                                <span class="radio-tile">
                                    <span class="radio-icon">
                                    </span>
                                    <span class="radio-label">S</span>
                                </span>
                            </label>

                           

                            <label>
                                <input class="radio-input" type="radio" name="engine" />
                                <span class="radio-tile">
                                    <span class="radio-icon">

                                    </span>
                                    <span class="radio-label">M</span>
                                </span>
                            </label>
                            <label>
                                <input class="radio-input" type="radio" name="engine" />
                                <span class="radio-tile">
                                    <span class="radio-icon">

                                    </span>
                                    <span class="radio-label">L</span>
                                </span>
                            </label>
                            <label>

                                <input class="radio-input" type="radio" name="engine" />
                                <span class="radio-tile">
                                    <span class="radio-icon">

                                    </span>
                                    <span class="radio-label">XL</span>
                                </span>
                            </label>
                            <label>

                                <input class="radio-input" type="radio" name="engine" />
                                <span class="radio-tile">
                                    <span class="radio-icon">

                                    </span>
                                    <span class="radio-label">XXL</span>
                                </span>
                            </label>


                        </div>


                        <div className="btn-group">
                            <button class="cart-btn ">
                                <i class="fa-solid fa-bag-shopping"></i>   Add To CART
                            </button>

                            <button class="cart-btn add-to-wishlist">
                                <i class="fa-regular fa-heart"></i>  Add To Wishlist
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
                            <i class="fa-solid fa-shield-cat"></i>
                                 <p>Secure <br /> Payments</p>
                            </div>
                            <div >
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                                <p>Instant <br /> Refuds</p>
                            </div>
                            <div ><i class="fa-regular fa-circle-check"></i>
                                <p>100% <br /> Genuine product</p>
                            </div>
                        </div>

                    </div>




                </div>



            </div>

        </>
    )
}
