import { useContext, useEffect, useState } from "react"
import style from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo1.png"
import { UserContext } from "../../Context/UserContext"
import { cartContext } from "../../Context/CartContext"




export default function Navbar(){

    let {userLogin,setuserLogin} = useContext(UserContext)
    let {cartItems} = useContext(cartContext)

    let navigate = useNavigate()

    function logOut(){
        localStorage.removeItem('userToken')
        setuserLogin(null)
        navigate("/login")

    }
    


return<>
<nav  className=" m-auto z-50 static lg:fixed top-0 left-0 right-0 bg-slate-100  ">
    <div className="m-auto w-3/4">
    <div className="  main flex  flex-col lg:flex-row lg:justify-between lg:items-center  ">
                <div className="logo flex  flex-col lg:flex-row   lg:items-center  ">
                    <img src={logo} style={{width:"15%"}}alt="logo-img" />
                    <ul className="flex  flex-col lg:flex-row lg:items-center  ">
                    {userLogin !== null ?
                    <>
                    <li  className="px-3 py-2"><Link className="text-black   font-medium" style={{textDecoration:"none"}}  to="/">Home</Link></li>
                        <li  className="px-3 py-2"><Link className="text-black   font-medium"style={{textDecoration:"none"}} to="products">Products</Link></li>
                        <li className="px-3 py-2"><Link className="text-black  font-medium"style={{textDecoration:"none"}} to="categories">Categories</Link></li>
                        <li className="px-3 py-2"><Link className="text-black  font-medium"style={{textDecoration:"none"}} to="brands">Brands</Link></li>
                    </>:null}
                        
                        
                    </ul>
                </div>
                <div className="social flex flex-col lg:flex-row lg:items-center  ">
                
                    <ul className=" flex flex-col lg:flex-row lg:items-center ">

                        
                        {userLogin == null?
                        <> <li  className="px-3 py-2"><Link className="text-black font-medium"  style={{textDecoration:"none"}} to="Register">Register</Link></li>
                        <li className="px-3 py-2"><Link className="text-black font-medium" style={{textDecoration:"none"}} to="Login">Login</Link></li>
                        </>:
                        <>
                        
                        <Link to={"/cart"} className="relative mx-2">
                        <i className="fa-solid text-3xl text-black   fa-cart-shopping"></i>
                        <span className="absolute text-sm right-[-5px]  p-[4px] bg-green-600 rounded-2xl text-white top-[-6px] ">{cartItems?.numOfCartItems}</span>
                        </Link>
                
                       
                        <li onClick={()=>logOut()} className="px-3 py-2"><Link className="text-black font-medium" style={{textDecoration:"none"}} to="Login">LogOut</Link></li>
                        </>
                        }
                        
                        <li className=" flex flex-col lg:flex-row lg:items-center "  ><i className="fa-brands px-3 py-2 fa-facebook"></i>
                        <i  className="fa-brands px-3 py-2 fa-twitter"></i>
                        <i className="fa-brands px-3 py-2 fa-instagram"></i>
                        <i className="fa-brands px-3 py-2 fa-youtube"></i>
                        </li>
                      
                        
                        
                    </ul>
                </div>

                

        </div>

    </div>
    
        
   
       

    
</nav>





    </>
}