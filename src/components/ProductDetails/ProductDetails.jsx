import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

export default function ProductDetails() {
  // State
  const [product, setProduct] = useState(null);
  const [RelatedProducts, setRelatedProducts] = useState([]);

  // Param
  let { id, category } = useParams();

  // Functions
  function getProducts(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProduct(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getRelatedProducts(category) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let allProducts = data.data;
        let products = allProducts.filter(
          (product) => product.category.name == category
        );
        setRelatedProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Effect
  useEffect(() => {
    getProducts(id);
    getRelatedProducts(category);
  }, [id, category]);

  // Slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center ">
        <div className="w-1/4 p-2">
          {/* Slider */}
          <Slider {...settings}>
            {product?.images.map((src) => (
              <img
                key={product.id}
                className="w-full"
                src={src}
                alt={product?.title}
              />
            ))}
          </Slider>
        </div>
        <div className="w-3/4 p-2">
         {/* Product title */}
          <h4>{product?.title}</h4>

          {/* Product description */}
          <p className="text-gray-600">{product?.description}</p>
          <div className="flex justify-between my-1 px-1">

            {/* Product price */}
            <span className="text-slate-800 font-medium ">
              {product?.price} EGP
            </span>
            <span className="text-slate-800 font-medium ">
              {product?.ratingsAverage}
              <i className="fa px-1 text-yellow-500 fa-star"></i>
            </span>
          </div>

          <button className="bg-green-500 text-white font-xl w-full rounded-md py-2 my-4 ">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="row flex my-3">
        {RelatedProducts.map((item) => (
          <div key={item.id} className="col-md-3 py-3 cursor-pointer  px-5">
            <Link
              style={{ textDecoration: "none" }}
              to={`/productDetails/${item.id}/${item.category.name}`}
            >
              <div>
                {/* Building image */}
                <img
                  className="w-full"
                  src={item.imageCover}
                  alt={item.title}
                />

                {/* Category name */}
                <h5 className="text-green-600">{item.category.name}</h5>

                {/* Product title */}
                <h5 className="text-slate-800  ">
                  {item.title.split(" ").slice(0, 2).join(" ")}
                </h5>
                <div className="flex justify-between px-1">
                  {/* Price */}
                  <span className="text-slate-800 font-medium ">
                    {item.price} EGP
                  </span>

                  {/* Ratings */}
                  <span className="text-slate-800 font-medium ">
                    {item.ratingsAverage}
                    <i className="fa px-1 text-yellow-500 fa-star"></i>
                  </span>
                </div>

                {/* Add to Cart button */}
                <button className="bg-green-500 text-white font-xl w-full rounded-md py-1 my-1 ">
                  Add to Cart
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
