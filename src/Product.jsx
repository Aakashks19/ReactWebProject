import { useState, useEffect } from "react";

const Product = () => {

  const [item, setentry] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch("https://dummyjson.com/products");
      const users = await res.json();
      setentry(users.products);
    }
    fetchdata();
  }, [])


  return (
    <div className="product">

      {
        item.map((i) => (

          <div className="flex">

            <img src={i.images} height={245}></img>
            <div className="ptitle">
              {i.id} - {i.title}
            </div>
            <div className="cate">
              Category : {i.category}
            </div>
            <div className="price">
              Price : ₹{i.price}/-
            </div>
            <div className="rating">
              Rating : {i.rating}
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Product