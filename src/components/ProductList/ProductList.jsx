import React from 'react'
import "./ProductList.css"
import ProductCard from '../ProductCard/ProductCard'

export default function ProductList(props) {
    return (
        <>
            <section>

                <div className="container" >

                    <h2>Women / Shirts </h2>

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
