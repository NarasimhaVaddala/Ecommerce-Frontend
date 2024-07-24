import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsDropdown() {



  const men = {
    topwear: ["shirts", "tshirts"],
    bottomwear: ["jeans", "trousers", "joggers", "cargos"],
    inners: ["boxers", "brief", "tank"],
    footwear: ["shoes", "sandals", "slides"],
  };
  const women = {
    topwear: ["croptops", "sleeveless", "shirts", "traditional" ,"tshirts"],
    bottomwear: ["leggings", "trousers", "jeans", "skirts"],
    inners: ["brief", "bra-panty", "slips"],
    footwear: ["shoes", "sandals", "slides"],
  };
  const kids = {
    boys: ["shirts", "trousers", "traditional"],
    girls: ["shirts", "trousers", "traditional"],
    babies: ["combos", "underwear"],
  };

  return (
    <>
      
      <MainDropdown obj={men} title="men" />
      <MainDropdown obj={women} title="women" />
      <MainDropdown obj={kids} title="kids" />
      
      
    </>
  );
}

function Dropdown({ title, text, url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        className="flex gap-4 items-center justify-between font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="capitalize">{title}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      {isOpen && (
        <div
          className={`flex flex-col gap-2 transition-all ease-in-out duration-1000 overflow-hidden`}
        >
          {text.map((e, index) => {
            return (
              <Link
                key={index}
                className="capitalize text-sm"
                to={`${url}/${e}`}
              >
                {e}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MainDropdown({ obj , title}) {
  return (

    <>
    <div className="flex flex-col gap-1 mb-2">
      <h3 className="text-xl font-bold text-blue-800 capitalize">{title}</h3>
      <div className="flex flex-col gap-2">
        {Object.entries(obj).map((e,index) => {
            return (
                <Dropdown key={index} title={e[0]} text={e[1]} url={`/products/${title}/${e[0]}`} />
            );
        })}
      </div>
    </div>
    <hr className="mb-2" />
        </>
  );
}
