import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo1.png";
import { UserContext } from "../../Context/UserContext";
import { cartContext } from "../../Context/CartContext";

export default function Navbar() {
  // Navigate
  let navigate = useNavigate();

  // Context
  let { userLogin, setUserLogin } = useContext(UserContext);
  let { cartItems } = useContext(cartContext);

  // Functions
  function logOut() {
    localStorage.removeItem("userToken");
    setUserLogin(null);
    navigate("/login");
  }

  return (
    <>
      <nav className=" m-auto z-50 static lg:fixed top-0 left-0 right-0 bg-slate-100  ">
        <div className="m-auto w-3/4">
          <div className="  main flex  lg:flex-col flex-row lg:justify-between lg:items-center items-center ">
            <div className="logo flex flex-row  lg:flex-col ">
              <img src={logo} alt="logo-img" className="lg:w-[15%] w-[60%]" />
              <ul className="lg:flex  flex-col lg:flex-row lg:items-center  hidden ">
                {/* Check if user login found */}
                {userLogin !== null ? (
                  <>
                    {/* Home */}
                    <li className="px-3 py-2">
                      <Link
                        className="text-black   font-medium"
                        style={{ textDecoration: "none" }}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>

                    {/* About */}
                    <li className="px-3 py-2">
                      <Link
                        className="text-black   font-medium"
                        style={{ textDecoration: "none" }}
                        to="products"
                      >
                        Products
                      </Link>
                    </li>

                    {/* Categories */}
                    <li className="px-3 py-2">
                      <Link
                        className="text-black  font-medium"
                        style={{ textDecoration: "none" }}
                        to="categories"
                      >
                        Categories
                      </Link>
                    </li>

                    {/* Brands */}
                    <li className="px-3 py-2">
                      <Link
                        className="text-black  font-medium"
                        style={{ textDecoration: "none" }}
                        to="brands"
                      >
                        Brands
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
            <div className="social flex  lg:flex-row items-center justify-center lg:justify-between flex-col   ">
              <ul className=" flex lg:flex-row lg:items-center items-center ">
                {userLogin == null ? (
                  <>
                    {" "}
                    {/* Register */}
                    <li className="px-3 py-2">
                      <Link
                        className="text-black font-medium"
                        style={{ textDecoration: "none" }}
                        to="Register"
                      >
                        Register
                      </Link>
                    </li>
                    {/* Login */}
                    <li className="px-3 py-2">
                      <Link
                        className="text-black font-medium"
                        style={{ textDecoration: "none" }}
                        to="Login"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    {/* Cart */}
                    <Link to={"/cart"} className="relative mx-2 mt-2 ">
                      <i className="fa-solid lg:text-3xl text-xl text-black   fa-cart-shopping"></i>
                      <span className="absolute text-sm right-[-5px]  p-[4px] bg-green-600 rounded-2xl text-white top-[-6px] ">
                        {cartItems?.numOfCartItems}
                      </span>
                    </Link>

                    <li onClick={() => logOut()} className="px-3 py-2">
                      <Link
                        className="text-black text-[16px] lg:font-medium"
                        style={{ textDecoration: "none" }}
                        to="Login"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )}

                {/* Social */}
                <li className=" lg:flex flex-col lg:flex-row lg:items-center hidden ">
                  <i className="fa-brands px-3 py-2 fa-facebook"></i>
                  <i className="fa-brands px-3 py-2 fa-twitter"></i>
                  <i className="fa-brands px-3 py-2 fa-instagram"></i>
                  <i className="fa-brands px-3 py-2 fa-youtube"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
