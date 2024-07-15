import React from "react";
import Card from "./Card";

export default function Products() {
  return (
    <section>
      <div className="container grid grid-cols-2  lg:grid-cols-4 gap-4 mb-8">
        <Card
        price={799}
          img='https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg'
          
          brand="Adidas"
          name="Black Tshirt with all fucking bullshit"
          url='/product/'
        />
        <Card
        price={799}
          img='https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg'
          
          brand="Adidas"
          name="Black Tshirt with all fucking bullshit"
          url='/product/'
        />
        <Card
        price={799}
          img='https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg'
          
          brand="Adidas"
          name="Black Tshirt with all fucking bullshit"
          url='/product/'
        />
      </div>
    </section>
  );
}
