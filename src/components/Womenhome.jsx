import React from 'react'
import "../styles/sections-home.css"
import HomeCards from './HomeCards'
export default function Womenhome(props) {
  let {title, list} = props;
  return (
    <section>




      <div className="container section-home">

        <div className="section-common-box">
          <h1 className='section-common--heading'>{title}'s Clothing</h1>
          <p className='section-common--subheading'>Shop On Wide range of Products for {title}</p>
       </div>


       <div className="section grid grid-four--cols">
            {
              list.map((e)=>{
               
                return <HomeCards key={e.category} imgurl={e.imgurl} category={e.category} price={e.price} />
              })
            }
       </div>


      </div>

    </section>
  )
}
