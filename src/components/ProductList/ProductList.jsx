import React from 'react'
import "./ProductList.css"
import HomeCards from '../HomeCards/HomeCards'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductList() {
    return (
        <>
            <section>

                <div className="container" >

                    <div className=" grid grid-four--cols">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>

            </section>

        </>
    )
}
