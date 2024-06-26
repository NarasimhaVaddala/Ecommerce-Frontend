import React from 'react'
import Carousel from '../Carousel/Carousel'
import CategoryHome from '../CategoryHome/CategoryHome'

export default function Home() {

  const men = [
    {
      imgurl: "https://images.bewakoof.com/t1080/men-s-black-deadpool-duo-graphic-printed-oversized-t-shirt-644743-1718287838-1.jpg",
      category: "top Wear",
      price: "799"
    },
    {
      imgurl: "https://images.bewakoof.com/t640/men-s-jet-black-slim-fit-cargo-jeans-629591-1705469180-1.JPG",
      category: "bottom Wear",
      price: "999"
    },
    {
      imgurl: "https://images.bewakoof.com/t640/men-s-multicolor-all-over-printed-boxers-570834-1683281572-1.JPG",
      category: "inners",
      price: "299"
    },
    {
      imgurl: "https://images.bewakoof.com/t1080/men-s-green-black-kakashi-color-block-high-top-sneakers-630679-1718781621-1.jpg",
      category: "footwear",
      price: "1899"
    },

  ]
  const women = [
    {
      imgurl: "https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg",
      category: "top wear",
      price: "599"
    },
    {
      imgurl: "https://images.bewakoof.com/t640/women-s-grey-super-loose-fit-joggers-624641-1710767506-1.jpg",
      category: "bottom wear",
      price: "799"
    },
    {
      imgurl: "https://images.bewakoof.com/t640/women-s-dark-blue-denim-shorts-642604-1717762395-1.JPG",
      category: "inners",
      price: "299"
    },
    {
      imgurl: "https://images.bewakoof.com/t640/heat-waves-velcro-womens-sliders-608110-1698922949-1.jpg",
      category: "footwear",
      price: "1899"
    },

  ]

  const kids = [
    
    {
      imgurl:"https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=600",
      category:"boys",
      price:"799"
    },
    {
      imgurl:"https://images.pexels.com/photos/1493108/pexels-photo-1493108.jpeg?auto=compress&cs=tinysrgb&w=600",
      category:"girls",
      price:"799"
    },
    {
      imgurl:"https://images.pexels.com/photos/2533323/pexels-photo-2533323.jpeg?auto=compress&cs=tinysrgb&w=600",
      category:"babies",
      price:"399"
    }
  ]

  return (
    <>
      <Carousel />


      <CategoryHome title="men" list={men}/>

      <CategoryHome title="women" list={women}/>

      <CategoryHome title="kid" list={kids}/>



    </>
  )
}
