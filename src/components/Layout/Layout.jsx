import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container my-36">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
