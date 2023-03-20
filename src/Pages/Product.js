
import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import cloth from "../images/cloth.jpg";
import cloth2 from "../images/cloth2.jpg";
import cloth3 from "../images/cloth3.jpg";
import cloth4 from "../images/cloth4.jpg";
import cloth5 from "../images/cloth5.jpg";
import cloth6 from "../images/cloth6.jpg";
import cloth7 from "../images/cloth7.jpg";
import cloth8 from "../images/cloth8.jpg";

function Product(){

    const product=[ { id:1,image:cloth},{ id:2,image:cloth2},{id:3,image:cloth3},{id:4,image:cloth4},{id:5,image:cloth5},{id:6,image:cloth6},{id:7,image:cloth7},{id:8,image:cloth8}
    ]
    return(

        <div>
            {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>  */}
<div className="item flex ">
              {
                product.map( (item,idx) =>(
                   <div className="image" key={product.item}>
                       <img src={item.image} alt=""></img>
                   </div>
                ))
              }
             
                {/* <img src={cloth2} alt=""></img>
                <img src={cloth3} alt=""></img>
                <img src={cloth4} alt=""></img> */}
            </div>
        </div>
    )

}
export default Product