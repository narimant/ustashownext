import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Box = ({title,imageUrl,paragraf,linkHref}) => {
    return (
        <Link href="#">
        <div className='flex justify-between items-center p-4  bg-gray-100 rounded-lg hover:shadow-xl'>
            <div className='grid grid-flow-row gap-2'>
                <h3 className='text-lg font-bold'>
                   {title}
                </h3>
                <p>
                   {paragraf}
                </p>
            </div>
            <div>
                <Image src={imageUrl} width={70} height={70} alt='cat-image' />
            </div>
        </div>
        </Link>
    );
};

export default Box;