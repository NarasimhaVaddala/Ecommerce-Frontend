import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import axios from "axios";
import UserContext from "../app/context";

export default function Products() {
  const value = useContext(UserContext);
  const [data, setData] = useState([]);

  const getData = () => {
    //Loading variable decalred in app.js which is used to show loader component while fetching data
    //If loading true loader component will show 
    value.setLoading(true)

    //data will be fetched from api and stored in Redux store
    axios.get("http://localhost:3000/products/")
    .then(res => setData(res.data.data))
    .catch(e=>console.log(e.message))

    //loading will be false
    value.setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className="container grid grid-cols-2  lg:grid-cols-4 gap-4 mb-8 mt-8">
      {/* Here The entire objects are sent as prop to ensure readability and reducing number of lines of code */}
        {data.map(e=> <Card obj={e}  key={e._id}  />)}
      </div>
    </section>
  );
}
