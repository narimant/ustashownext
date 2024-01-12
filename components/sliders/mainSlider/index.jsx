"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Scrollbar,
   Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
SwiperCore.use([Autoplay]);

const MainSlider = () => {
   const [slider,setSlider]=useState([]);

   useEffect(()=>{
      axios.get('https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-active-slider').then(data=>{
      
         setSlider(data.data)}
         ).catch(error=>console.log(error));
   },[])
   return (
      <main>
         <section className=" container mx-auto ">
            <Swiper
               modules={[Navigation,Pagination, Scrollbar]}
               
               slidesPerView={1}
               navigation
               pagination
               autoplay={{ delay: 3000 }}
               scrollbar={{ draggable: true }}
            
            >
             {
               slider[0]==-1?(<p className="text-center">loading...</p>) :
               slider.map((item,index)=>(
               
                  <SwiperSlide key={index}>
                        <Link href={item.link}>
                  <div className=" rounded-md flex justify-center items-center overflow-hidden ">
                    <Image src={item.image} width={1920} height={400} className="h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] "  alt={item.imageAlt}/>
                  </div>
                  </Link>
               </SwiperSlide>
              
               ))
             }
                
            
              
               

            </Swiper>
         </section>
      </main>
   );
};

export default MainSlider;
