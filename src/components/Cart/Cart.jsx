import { useContext, useEffect, useState } from "react"
import style from "./Cart.module.css"
import { cartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"




export default function Cart(){

    let {displayCart,removeCart,updateCart,setCartItems} = useContext(cartContext)
    let [allProducts,setAllProducts] = useState(null)

    async function displayItemCart(){
        let item = await displayCart()
        setAllProducts(item.data)
        console.log(item.data.data);
        
    }
    async function removeItemCart(productId){
        let item = await removeCart(productId)
        setAllProducts(item.data)
        setCartItems(item.data)
        
    }
    async function updateItemCart(productId,count){
        let item = await updateCart(productId,count)
        if(count < 1)
          removeItemCart(productId)
        setAllProducts(item.data)
        
        
    }

    

    useEffect(()=>{
        displayItemCart()
        
    },[])

    


    


    return<>
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
        {allProducts?.data?.products.map((product)=><tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={()=>updateItemCart(product.product.id,product.count-1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
            <span>{product.count}
          </span>
            </div>
            <button onClick={()=>updateItemCart(product.product.id,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.price} EGP
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>removeItemCart(product.product.id)} className="font-medium text-red-600 cursor-pointer dark:text-red-500 hover:underline">Remove</span>
        </td>
      </tr>
        )}

      
    
    </tbody>
       
  </table>
        <Link to={"/checkout"}>
         <button  className="bg-green-500 text-white font-xl w-full rounded-md py-1 my-1 ">Check Out</button>
        </Link>
</div>


    </>
}