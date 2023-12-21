"use client"
import Link from 'next/link';

import SlideSection from './SlideSection';
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const ProductSlider = ({title}) => {

    return (
        <div className='container mx-auto my-16'>
         <div className='flex justify-between text-xl py-8'>
            <h1 className='font-semibold'>{title}</h1>
            <Link href="#" className='flex justify-between items-center gap-4 hover:text-purple-600 text-base'>
                <span>بیشتر</span>
                <MdArrowBackIos />
            </Link>
         </div>
     
         <div className='grid grid-cols-4 gap-4'>
            <SlideSection image="/images/product/01.png" title="محصول شماره 1" price={2500} category={[ "آموزش" , " ترفند" ]}/>
            <SlideSection image="/images/product/06.jpg" title="محصول شماره 2" price={5000} category={[ "آموزش" , " ترفند" ]}/>
            <SlideSection image="/images/product/03.png" title="محصول شماره 3" price={3000} category={[ "آموزش" , " ترفند" ]}/>
            <SlideSection image="/images/product/04.png" title="محصول شماره 1" price={56000} category={[ "آموزش" , " ترفند" ]}/>


         </div>
        </div>
    );
};

export default ProductSlider;