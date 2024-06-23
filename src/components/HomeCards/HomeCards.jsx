import React from 'react'
import "./Homecards.css"
import { Link } from 'react-router-dom';
export default function HomeCards(props) {
  const {imgurl , category, price ,title} = props;
  return (

    <Link to={`/products/${title}/${category}`}>
    <div className='homecard'>

        <img src={imgurl} alt="" />
        

        <p className="textbox capitalise" >
            {category} starting at {price}
        </p>

       
        
    </div>
    </Link>
  )
}
