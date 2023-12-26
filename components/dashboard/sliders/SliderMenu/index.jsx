"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SliderMenu = () => {
   
    const router=usePathname();

    return (
        <div className='w-full'>
                <div className='child:py-2 child:px-3 child:ml-5 py-5'>
                    <Link href="/dashboard/sliders" className={`${router==='/dashboard/sliders' && 'border-b border-purple-600'} `} >همه </Link>
                    <Link href="/dashboard/sliders/create"  className={`${router==='/dashboard/sliders/create' && 'border-b border-purple-600'} `} >ایجاد اسلایدر </Link>
                </div>
             
            </div>
    );
};

export default SliderMenu;