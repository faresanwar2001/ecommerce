import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Register() {
  // State
  const [errorApi, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Navigate
  const navigate = useNavigate();

  // Context
  let { setUserLogin } = useContext(UserContext);

  // Functions
  function handleRegister(val) {
    setIsLoading(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, val)
      .then((apiError) => {
        console.log(apiError);

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
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name is minimum 3 characters")
      .max(10, "Name is maximum 10 characters"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^01[0125][0-9]{8}$/, "phone is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{5,8}$/, "password is invalid"),
    rePassword: yup
      .string()
      .required("Password is required")
      .oneOf([yup.ref("password")], "rePassword is not matched password"),
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
    onSubmit: handleRegister,
  });

  return (
    <>
      <div className="container">
        {/* Heading */}
        <h1>Register Now</h1>

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
          <label htmlFor="name">Name:</label>

          {/* Name */}
          <input
            onBlur={formik.handleBlur}
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="form-control shadow-md my-3"
            type="text"
            id="name"
          />

          {/* Error */}
          {formik.errors.name && formik.touched.name ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.name}
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
          <label htmlFor="phone">Phone:</label>

          {/* Phone */}
          <input
            onBlur={formik.handleBlur}
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="form-control shadow-md my-3"
            type="tel"
            id="phone"
          />

          {/* Error */}
          {formik.errors.phone && formik.touched.phone ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.phone}
            </div>
          ) : null}

          {/* Label */}
          <label htmlFor="password">Password:</label>

          {/* Password */}
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

          {/* Label */}
          <label htmlFor="rePassword">Re-Password:</label>

          {/* Re-Password */}
          <input
            onBlur={formik.handleBlur}
            name="rePassword"
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            className="form-control shadow-md my-3"
            type="password"
            id="rePassword"
          />

          {/* Error */}
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.rePassword}
            </div>
          ) : null}

          <div className="flex flex-row items-center">
            {/* Remember Me */}
            <button
              type="submit"
              className="bg-green-500 rounded-md hover:bg-green-900 text-white py-2 px-3"
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Register"
              )}
            </button>

            {/* Forgot Password */}
            <p className="px-3 my-3">
              did have account yet?{" "}
              <span className="font-bold">
                <Link style={{ textDecoration: "none" }} to={"/Login"}>
                  Login Now
                </Link>
              </span>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
