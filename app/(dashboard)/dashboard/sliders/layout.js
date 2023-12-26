
import SliderMenu from '@/components/dashboard/sliders/SliderMenu';
import React, { Suspense } from 'react';

const BannerLayout = ({children}) => {
    return (
        <div>
            <div><SliderMenu /></div>
            <div>
               
                {children}
               
            </div>
        </div>
    );
};

export default BannerLayout;