import { useEffect, useState } from "react"
import style from "./CategorySlider.module.css"
import Slider from "react-slick";
import axios from "axios";



export default function CategorySlider(){

    let [categories,setCategories] = useState([])

    function getProducts(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then(({data})=>{
            setCategories(data.data);
            

            
        })
        .catch((error)=>{
            console.log(error);
            

        })
    }
    useEffect(()=>{
        getProducts()

    },[])
    

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay: true,
      };


    return<>

<div className="lg:block hidden">
      <h3 className="text-gray-700 font-medium">Shop Popular Categories</h3>
      
    <Slider {...settings}  className="flex flex-col lg:flex-row container  ">
        

    {categories.map((category)=> <div key={category.name}>
        <img style={{height:"200px"}} className="w-full" src={category.image} alt={category?.name} />
        <h4 style={{fontSize:"18PX"}} className="font-normal mt-1 text-gray-700 ">{category?.name}</h4>
        
    </div> )}
    
    </Slider>
    </div>
   
    </>
}