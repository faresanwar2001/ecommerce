import { useEffect, useState } from "react"
import style from "./MainSlider.module.css"
import Slider from "react-slick";
import mainSlid from "../../assets/img/mainslid.jpg"
import mainSlid1 from "../../assets/img/mainslid1.jpg"
import mainSlid2 from "../../assets/img/mainslid2.jpg"
import mainSlid3 from "../../assets/img/mainslid3.jpg"
import slidChild from "../../assets/img/slidechild.jpg"
import slidChild1 from "../../assets/img/slidchild1.jpg"


export default function MainSlider(){



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        arrows:false
      };
    


    return<>

    <div className="flex mb-4 ">

    <div className="w-3/4 flex-col  lg:flex-row">
    <Slider {...settings}>


    
    <img  className="w-full h-[500px]" src={mainSlid}  />
    <img  className="w-full h-[500px]" src={mainSlid1}  />
    <img  className="w-full h-[500px]" src={mainSlid2}  />
    <img  className="w-full h-[500px]" src={mainSlid3}  />


</Slider>

    </div>
    <div className="w-1/4  ">
    <img style={{height:"250px"}} src={slidChild} alt="" />
    <img style={{height:"250px"}} src={slidChild1} alt="" />
    </div>
    </div>

    </>
}