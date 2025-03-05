import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  // Check if the token is found
  if (localStorage.getItem("userToken") !== null) {
    return props.children;
  } else {
    // Return login
    return <Navigate to={"/login"} />;
  }
}
