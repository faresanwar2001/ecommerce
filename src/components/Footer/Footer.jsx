import { useContext } from "react";
import logo from "../../assets/img/logo1.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Footer() {
  // Context
  const { userLogin } = useContext(UserContext);

  return (
    <>
      {/* Check if token render footer if not no */}
      {userLogin !== null ? (
        <>
          <div className="grid bg-gray-200 py-5  lg:grid-cols-3 lg:grid-row  items-center  justify-center">
            <div className="logo text-center ">
              {/* Building image */}
              <img
                className="text-center"
                src={logo}
                style={{ width: "70%", display: "inline-block" }}
                alt="logo-img"
              />
            </div>
            <div className="links text-center">
              {/* Heading links */}
              <h2 className="text-center">Useful Links</h2>
              <ul>
                {/* Home */}
                <li className="mb-2">
                  <Link
                    className="text-black font-medium"
                    style={{ textDecoration: "none" }}
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>

                {/* About */}
                <li className="mb-2">
                  <Link
                    className="text-black font-medium"
                    style={{ textDecoration: "none" }}
                    to={"about"}
                  >
                    About
                  </Link>
                </li>

                {/* Products */}
                <li className="mb-2">
                  <Link
                    className="text-black font-medium"
                    style={{ textDecoration: "none" }}
                    to={"products"}
                  >
                    Products
                  </Link>
                </li>

                {/* Cart */}
                <li className="mb-2">
                  <Link
                    className="text-black font-medium"
                    style={{ textDecoration: "none" }}
                    to={"cart"}
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            <div className="social text-center">
              {/* Heading social */}
              <h2>Follow Us</h2>
              <i className="fa-brands px-3 py-2 fa-facebook"></i>
              <i className="fa-brands px-3 py-2 fa-twitter"></i>
              <i className="fa-brands px-3 py-2 fa-instagram"></i>
              <i className="fa-brands px-3 py-2 fa-youtube"></i>
            </div>
          </div>
          <div className="copyRight text-center my-auto grid justify-center items-center bg-green-300 py-">
            <p className="lg:text-2xl text-normal">
              Build with by Fares{" "}
              <span className="text-xl">2024 @ All Right Reserved</span>{" "}
            </p>
          </div>
        </>
      ) : null}
    </>
  );
}
