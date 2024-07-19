import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer , toast } from "react-toastify";

export default function AddProduct() {
  const [selectedGender, setSelectedGender] = useState(""); // Track selected gender
  const [availableCategories, setAvailableCategories] = useState([]); // Available categories based on gender
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category
  const [availableOptions, setAvailableOptions] = useState([]); // Available options based on category
  const [selectedOption, setSelectedOption] = useState("");
  // Data with clear separation of categories

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const data = {
    men: {
        topwear: ["shirts", "tshirts"],
        bottomwear: ["jeans", "trousers", "joggers", "cargos"],
        inners: ["boxers","brief","tank"],
        footwear: ["shoes", "sandals", "slides"],
    },
    women: {
        topwear: ["croptops", "sleeveless", "shirts", "traditional"],
        bottomwear: ["leggings", "trousers", "jeans", "skirts"],
        inners: ["brief", "bra/panty", "slips"],
        footwear: ["shoes", "sandals", "slides"],
    },
    kids: {
        boys: ["shirts", "trousers", "traditional"],
        girls: ["shirts", "trousers", "traditional"],
        babies: ["combos", "underwear"],
    },
  };


  
    
  

  useEffect(() => {
    // Reset selections and options when gender changes
    setSelectedCategory("");
    setAvailableOptions([]);
    if (selectedGender) {
      setAvailableCategories(Object.keys(data[selectedGender])); // Update available categories
    } else {
      setAvailableCategories([]); // Clear categories if no gender selected
    }
  }, [selectedGender]); // Dependency array ensures updates on gender change

  useEffect(() => {
    // Reset options when category changes
    setAvailableOptions([]);
    if (selectedCategory && selectedGender) {
      setAvailableOptions(data[selectedGender][selectedCategory]); // Update available options
    }
  }, [selectedCategory, selectedGender]); // Dependency array ensures updates on category change

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [size, setSize] = useState({ S: 10, M: 10, L: 10, XL: 10, XXL: 10 });

  const onSubmit = (data) => {
    console.log({
      ...data,
      category:selectedCategory,
      gender:selectedGender,
      type:selectedOption,
      size:size
    });


    postData({
        ...data,
        category:selectedCategory,
        gender:selectedGender,
        type:selectedOption,
        size:size
      })
  };


async function postData(obj){
            axios.post('http://localhost:3000/products/insert' , obj)
            .then((res)=>{toast.success("Product Added Successfully")}).catch(e=>toast.error(e.message))
}


  return (
    <section>
      <div className="container">
        <h2 className="text-2xl font-bold my-4">Add New Product</h2>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="gender">
            Gender:
          </label>
          <select
            className="p-2 my-2 border-2"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option value="">Select Gender</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        {selectedGender && (
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="category">
              Category:
            </label>
            <select
              className="p-2 my-2 border-2"
              value={selectedCategory}
              onChange={handleCategoryChange}
              disabled={!selectedGender}
            >
              <option value="">Select Category</option>
              {availableCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedCategory && (
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="options">
              Type:
            </label>
            <select
              className="p-2 my-2 border-2"
              value={selectedOption}
              disabled={!selectedCategory}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {" "}
              {/* No initial value, options depend on category */}
              <option value="">Select Option</option>
              {availableOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {selectedOption && selectedCategory && selectedOption && (
        <form
          className="container flex flex-col w-full "
          onSubmit={handleSubmit(onSubmit)}
        >
          {[
            { field: "name", label: "Product Name", type: "text" },
            {
              field: "description",
              label: "Product Description",
              type: "text",
            },
            { field: "image", label: "Image Url", type: "text" },
            { field: "price", label: "Price of product", type: "number" },
            { field: "brand", label: "Brand Name", type: "text" },
            { field: "color", label: "Color", type: "text" },
          ].map((e) => {
            return (
              <div key={e.field} className="flex flex-col">
                <label className="font-semibold" htmlFor={e.field}>
                  {e.label}
                </label>
                <input
                  type={e.type}
                  className="p-2 my-2 border-2 "
                  id={e.field}
                  {...register(`${e.field}`, { required: true })}
                />
                {errors[e.field] && (
                  <span className="text-red-600">This Field is required</span>
                )}
              </div>
            );
          })}

          <label>Sizes Minimum Quantity Should 10</label>

          <div className="flex flex-wrap gap-2">
            {["S", "M", "L", "XL", "XXL"].map((e) => (
              <div key={e} className="flex flex-col">
                <label className="font-semibold" htmlFor={e}>
                  {e}
                </label>
                <input
                  className="p-2 my-2 border-2 "
                  type="number"
                  placeholder={e}
                  id={e}
                  min={10}
                  value={size[e]} // Set default or current value
                  onChange={(event) =>
                    setSize({ ...size, [e]: event.target.value })
                  } // Update size state on change
                />
                
              </div>
            ))}
          </div>

          <input
            className="p-2 my-2 border-2 bg-black text-white font-semibold hover:bg-gray-800 cursor-pointer"
            type="submit"
          />
          <ToastContainer/>
        </form>
      )}
    </section>
  );
}
