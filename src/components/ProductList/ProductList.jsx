import React from 'react'
import "./ProductList.css"
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

export default function ProductList(props) {
    return (
        <>
          <div className="head-category">
          <Link to="/">Shirts</Link>
          <Link to="/">Tshirts</Link>
          <Link to="/">Tanks</Link>
        </div>
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
