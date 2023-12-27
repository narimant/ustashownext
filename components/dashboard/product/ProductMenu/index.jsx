"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ProductMenu = () => {
   
    const router=usePathname();

    return (
        <div className='w-full'>
                <div className='child:py-2 child:px-3 child:ml-5 py-5'>
                    <Link href="/dashboard/products" className={`${router==='/dashboard/products' && 'border-b border-purple-600'} `} >همه </Link>
                    <Link href="/dashboard/products/create"  className={`${router==='/dashboard/products/create' && 'border-b border-purple-600'} `} >ایجاد محصول </Link>
                </div>
             
            </div>
    );
};

export default ProductMenu;