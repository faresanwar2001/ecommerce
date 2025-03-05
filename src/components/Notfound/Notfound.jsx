import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <div className="container">
        {/* Heading */}
        <h1>404 Page Not Found</h1>

        {/* Description */}
        <p>Sorry, the page you are looking for could not be found.</p>

        {/* Button to go back to Homepage */}
        <Link to="/">Go back to Homepage</Link>
      </div>
    </>
  );
}
