import { Link } from "react-router-dom"
import style from "./Notfound.module.css"


export default function Notfound(){
    


    return<>
    <div className="container">
        <h1>404 Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <Link  to="/">Go back to Homepage</Link>
    </div>
    </>
}