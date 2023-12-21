import Image from 'next/image';
import React from 'react';

const MiddleBanner = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 box-content gap-4'>
            <Image src="/images/middle-banner/1.jpg" width={600} height={250}   className='rounded-xl w-full ' alt='baner'/>
            <Image src="/images/middle-banner/2.jpg" width={600} height={250} className='rounded-xl w-full ' alt='baner'/>
        </div>
    );
};

export default MiddleBanner;