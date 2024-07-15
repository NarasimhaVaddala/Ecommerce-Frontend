import React from "react";
import Card from "./Card";

export default function Products() {


const arr = [1,2,3,4,5,6]


  return (
    <section>
      <div className="container grid grid-cols-2  lg:grid-cols-4 gap-4 mb-8 mt-8">
        
{
  arr.map((_,index)=>{
    return <Card key={index} productName="Rashmika" brandName="adidas" desc="lorem58" price={500} size="S" img="https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg"
    />
  })
}

        
      
      </div>
    </section>
  );
}
