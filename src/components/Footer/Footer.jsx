import { useEffect, useState } from "react"
import style from "./Footer.module.css"
import logo from "../../assets/img/logo1.png"
import { Link } from "react-router-dom"


export default function Footer(){
    


    return<>
    <div className="">

    <div className="grid bg-gray-200 py-5  grid-cols-3 lg:grid-row  items-center  justify-center">
        <div className="logo text-center ">
        <img className="text-center" src={logo} style={{width:"70%",display:"inline-block"}}alt="logo-img" />
        
        </div>
        <div className="links text-center">
        <h2 className="text-center">Useful Links</h2>
            <ul>
                <li className="mb-2"><Link className="text-black font-medium"  style={{textDecoration:"none"}} to={"/"}>Home</Link></li>
                <li className="mb-2"><Link className="text-black font-medium"  style={{textDecoration:"none"}} to={"about"}>About</Link></li>
                <li className="mb-2"><Link className="text-black font-medium"  style={{textDecoration:"none"}} to={"products"}>Products</Link></li>
                <li className="mb-2"><Link className="text-black font-medium"  style={{textDecoration:"none"}} to={"cart"}>Cart</Link></li>
            </ul>
        </div>
        <div className="social text-center">
        <h2>Follow Us</h2>
        <i className="fa-brands px-3 py-2 fa-facebook"></i>
        <i  className="fa-brands px-3 py-2 fa-twitter"></i>
        <i className="fa-brands px-3 py-2 fa-instagram"></i>
        <i className="fa-brands px-3 py-2 fa-youtube"></i>

        </div>

    </div>
    <div className="copyRight text-center my-auto grid justify-center items-center bg-green-300 py-">
        <p className="text-2xl">Build with by Fares <span className="text-xl">2024 @ All Right Reserved</span> </p>

    </div>
    </div>


    </>
}