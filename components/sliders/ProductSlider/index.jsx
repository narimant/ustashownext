"use client";
import Link from "next/link";

import SlideSection from "./SlideSection";
import { MdArrowBackIos } from "react-icons/md";

const ProductSlider = ({ title, data, link }) => {

  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-between text-xl py-8">
        <h1 className="font-semibold">{title}</h1>
        <Link
          href={link}
          className="flex justify-between items-center gap-4 hover:text-purple-600 text-base"
        >
          <span>بیشتر</span>
          <MdArrowBackIos />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
       
            
           
             <SlideSection
                key={index}
              data={item}
                
              />
        
            
        
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
