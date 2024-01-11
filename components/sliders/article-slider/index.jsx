
import Link from 'next/link';

import SlideSection from './SlideSection';
import { MdArrowBackIos } from "react-icons/md";


const getData=async()=>{
    const result=await fetch("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-new-post",{cache:"no-store"})
    const data=await result.json();
    return data;
}
const ArticleSlider = async({title}) => {
const posts=await getData();
    return (
        <div className='container mx-auto my-8'>
         <div className='flex justify-between text-xl py-8'>
            <h1 className='font-semibold'>{title}</h1>
            <Link href="/blog" className='flex justify-between items-center gap-4 hover:text-purple-600 text-base'>
              <span>
            
                برو به وبلاگ
              
                </span>
                <MdArrowBackIos />
            </Link>
         </div>
     
         <div className='grid grid-cols-4 gap-4'>
            {
                    posts.map((post,index)=>(
                            <SlideSection key={index} data={post}/>
                    ))
            }
            
           


         </div>
        </div>
    );
};

export default ArticleSlider;