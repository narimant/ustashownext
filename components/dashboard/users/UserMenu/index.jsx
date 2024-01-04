"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const UserMenu = () => {
   
    const router=usePathname();

    return (
        <div className='w-full'>
                <div className='child:py-2 child:px-3 child:ml-5 py-5'>
                    <Link href="/dashboard/users" className={`${router==='/dashboard/users' && 'border-b border-purple-600'} `} >همه </Link>
                    <Link href="/dashboard/users/create"  className={`${router==='/dashboard/users/create' && 'border-b border-purple-600'} `} >ایجاد کاربر </Link>
                </div>
             
            </div>
    );
};

export default UserMenu;