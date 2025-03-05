import axios from "axios";
import { createContext, useEffect, useState } from "react";


// Create Context
export let cartContext = createContext();

export default function CartContextProvider(props) {
    // State
  let [cartItems, setCartItems] = useState(null);

  // Get token from local storage
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  // Functions
  function addToCart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: productId,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  function displayCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }
  function removeCart(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers: headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function updateCart(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: count,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  function checkoutCart(cartId, url, formValue) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        {
          shippingAddress: formValue,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  async function cartCounts() {
    let response = await addToCart();
    setCartItems(response.data);
  }

  useEffect(() => {
    cartCounts();
  }, []);

  return (
    <>
      <cartContext.Provider
        value={{
          cartItems,
          setCartItems,
          addToCart,
          displayCart,
          updateCart,
          removeCart,
          checkoutCart,
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}
