import { useFormik } from "formik"
import { useContext } from "react"
import * as yup from "yup"
import { cartContext } from "../../Context/CartContext"


export default function checkOut(){

    let {checkoutCart} = useContext(cartContext)

    

    //Yup schema for form validation
        let validate = yup.object().shape({
            details:yup.string().required("Details is required").max(30,"details is maximum 30 characters").min(10,"details is minimum 10 characters"),
            phone:yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/,"phone is invalid"),
            city:yup.string().required("City is required").max(20,"city is maximum 20 characters").min(5,"city is minimum 5 characters"),
        })

    let formik = useFormik({
        initialValues:{
            details:"",
            city:"",
            phone:""
        },validationSchema:validate
        ,onSubmit:()=> handleCheckout("6744212e803e888e054681bb","https://localhost:5173")

    })


    async function handleCheckout(cartId,url){
        let response = await checkoutCart(cartId,url,formik.value)
        if(response?.data?.status === "success"){
            window.location.href=response.data.session.url
        }

       
    }

    return<>
    <div className="container">
     <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">Details:</label>
        <input className="form-control shadow-md my-3" onBlur={formik.handleBlur} name="details" onChange={formik.handleChange} value={formik.values.details} className="form-control shadow-md my-3" type="text" id="details"  />
        {formik.errors.details && formik.touched.details?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.details }
            </div>:null}
        <label htmlFor="phone">Phone:</label>
        <input className="form-control shadow-md my-3" onBlur={formik.handleBlur} name="phone" onChange={formik.handleChange} value={formik.values.phone} className="form-control shadow-md my-3" type="tel" id="phone"  />
        {formik.errors.phone && formik.touched.phone?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.phone }
            </div>:null}
        <label htmlFor="city">City:</label>
        <input className="form-control shadow-md my-3" onBlur={formik.handleBlur} name="city" onChange={formik.handleChange} value={formik.values.city} className="form-control shadow-md my-3" type="text" id="city"  />
        {formik.errors.city && formik.touched.city?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.city }
            </div>:null}
        <button type="submit" className="bg-green-500 rounded-md hover:bg-green-900 text-white py-2 px-3">Check Out</button>

        </form>
        </div>
    </>
}