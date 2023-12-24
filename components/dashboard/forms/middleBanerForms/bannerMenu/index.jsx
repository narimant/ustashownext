"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BannerMenu = () => {
   
    const router=usePathname();

    return (
        <div className='w-full'>
                <div className='child:py-2 child:px-3 child:ml-5 py-5'>
                    <Link href="/dashboard/banners" className={`${router==='/dashboard/banners' && 'border-b border-purple-600'} `} >همه </Link>
                    <Link href="/dashboard/banners/create"  className={`${router==='/dashboard/banners/create' && 'border-b border-purple-600'} `} >ایجاد بنر</Link>
                </div>
             
            </div>
    );
};

export default BannerMenu;