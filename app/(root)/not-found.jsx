import Image from 'next/image';
import React from 'react';

const NotFound = () => {
    return (
        <div className='w-full flex justify-center items-center bg-white -mb-8 flex-col max-h-lvh'>
        <Image src="/images/404page.gif" width={600} height={400} alt='404' />
        <div>
            <h1 className='text-3xl'>صفحه مورد نظر یافت نشد</h1>
        </div>
        </div>
    );
};

export default NotFound;