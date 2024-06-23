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
                                <input checked="" class="radio-input" type="radio" name="engine" />
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
                            <button class="cart-btn">
                            <i class="fa-solid fa-bag-shopping"></i>   Add To CART
                            </button>

                            <button class="cart-btn">
                            <i class="fa-regular fa-heart"></i>  Add To Wishlist
                            </button>
                        </div>

                    </div>



                </div>


            </div>

        </>
    )
}
