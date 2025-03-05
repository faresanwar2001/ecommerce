import { useContext, useEffect, useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  // Navigate
  const navigate = useNavigate();

  // State
  const [errorApi, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Context
  const { setUserLogin } = useContext(UserContext);

  // Functions
  function handleLogin(val) {
    setIsLoading(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, val)
      .then((apiError) => {
        if (apiError.data.message === "success") {
          localStorage.setItem("userToken", apiError.data.token);
          setUserLogin(apiError.data.token);
          setIsLoading(true);
          navigate("/");
        }
      })
      .catch((apiError) => {
        setError(apiError.response.data.message);
      });
    setIsLoading(true);
  }

  // Form & validation
  let validate = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{5,8}$/, "password is invalid"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validate,
    onSubmit: handleLogin,
  });

  return (
    <>
      <div className="container">
        {/* Heading */}
        <h1>Login Now</h1>

        <form onSubmit={formik.handleSubmit} className="my-5">
          {/* Error */}
          {errorApi ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {errorApi}
            </div>
          ) : null}

          {/* Label */}
          <label htmlFor="email">Email:</label>

          {/* Email */}
          <input
            onBlur={formik.handleBlur}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control shadow-md my-3"
            type="email"
            id="email"
          />

          {/* Error */}
          {formik.errors.email && formik.touched.email ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.email}
            </div>
          ) : null}

          {/* Label */}
          <label htmlFor="password">Password:</label>

          {/* Passord */}
          <input
            onBlur={formik.handleBlur}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="form-control shadow-md my-3"
            type="password"
            id="password"
          />

          {/* Error */}
          {formik.errors.password && formik.touched.password ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.password}
            </div>
          ) : null}

          <div className="flex flex-row items-center">
            {/* Login button */}
            <button
              type="submit"
              className="bg-green-500 rounded-md hover:bg-green-900 text-white py-2 px-3"
            >
              {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>
            <p className="px-3 my-3">
              didn't have account yet?{" "}
              <span className="font-bold">
                <Link style={{ textDecoration: "none" }} to={"/register"}>
                  Register Now
                </Link>
              </span>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
