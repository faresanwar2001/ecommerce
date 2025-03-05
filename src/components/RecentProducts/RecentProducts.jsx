import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function RecentProducts() {
  // State
  let [recentProducts, setProducts] = useState([]);

  // Context
  let { addToCart, setCartItems } = useContext(cartContext);

  // Functions
  async function addItem(productId) {
    let product = await addToCart(productId);
    console.log(product);
    if (product.data.status === "success") {
      setCartItems(product.data);
      toast.success("Product added to cart successfully", {
        position: "top-center",
      });
    } else {
      toast.error("Failed to add product to cart");
    }
  }

  function getProducts() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Effect
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row flex">
        {recentProducts.map((item) => (
          <div key={item.id} className="col-md-3 py-3 cursor-pointer  px-5">
            <Link
              style={{ textDecoration: "none" }}
              to={`/productDetails/${item.id}/${item.category.name}`}
            >
              <div className="">
                {/* Building image */}
                <img
                  className="w-full"
                  src={item.imageCover}
                  alt={item.title}
                />

                {/* Category title */}
                <h5 className="text-green-600">{item.category.name}</h5>

                {/* Product title */}
                <h5 className="text-slate-800  ">
                  {item.title.split(" ").slice(0, 2).join(" ")}
                </h5>
                <div className="flex justify-between px-1">
                  {/* Product price */}
                  <span className="text-slate-800 font-medium ">
                    {item.price} EGP
                  </span>

                  {/* Product rating */}
                  <span className="text-slate-800 font-medium ">
                    {item.ratingsAverage}
                    <i className="fa px-1 text-yellow-500 fa-star"></i>
                  </span>
                </div>
              </div>

              {/* Add to cart button */}
            </Link>
            <button
              onClick={() => addItem(item.id)}
              className="bg-green-500 text-white font-xl w-full rounded-md py-1 my-1 "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
