import React from 'react'
import "../styles/Homecards.css"
export default function HomeCards(props) {
  const {imgurl , category, price } = props;
  return (
    <div className='homecard'>

        <img src={imgurl} alt="" />
        

        <p className="textbox">
            {category} starting at {price}
        </p>

       
        
    </div>
  )
}
