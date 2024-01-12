import CheckImage from '@/utils/checkImage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const getData=async ()=>{
    const result=await fetch('https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-active-banners');
   return  result.json();
}
const MiddleBanner =async () => {
    const data=await getData();
    
    return (
        <div className='container mx-auto grid grid-cols-1  md:grid-cols-2  box-content gap-4'>
            {data.map((item,index)=>(
                
                <Link href={item.link} key={index} >
                <Image src={CheckImage(item.image) ? (item.image) : ("/images/middle-banner/no-image.png")} width={600} height={250}   className='rounded-xl w-full ' alt={item.imageAlt}/>
                </Link>
            ))}
            
            
        </div>
    );
};

export default MiddleBanner;