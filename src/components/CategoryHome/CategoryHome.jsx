import React from 'react'
import "./sections-home.css"
import HomeCards from '../HomeCards/HomeCards'
export default function CategoryHome(props) {
  let {title, list} = props;
  return (
    <section>




      <div className="container section-home">

        <div className="section-common-box">
          <h1 className='section-common--heading capitalise'>{title}'s Clothing</h1>
          <p className='section-common--subheading'>Shop On Wide range of Products for {title}</p>
       </div>


       <div className="section grid grid-four--cols">
            {
              list.map((e)=>{
               
                return <HomeCards key={e.category} imgurl={e.imgurl} category={e.category} price={e.price} title={title} />
              })
            }
       </div>


      </div>

    </section>
  )
}
