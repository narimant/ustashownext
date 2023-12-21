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
SwiperCore.use([Autoplay]);

const MainSlider = () => {
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
               <SwiperSlide>
                  <div className=" rounded-md flex justify-center items-center overflow-hidden ">
                    <Image src="/images/slider/slide1.jpg" width={1920} height={300}   alt="image slider 1"/>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="  rounded-md flex justify-center items-center overflow-hidden">
                  <Image src="/images/slider/slide2.jpg"  width={1920} height={300} alt="image slider 2"/>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="  rounded-md flex justify-center items-center overflow-hidden">
                  <Image src="/images/slider/slide3.jpg" width={1920} height={300}   alt="image slider 3"/>
                  </div>
               </SwiperSlide>

            </Swiper>
         </section>
      </main>
   );
};

export default MainSlider;
