import BannerMenu from '@/components/dashboard/forms/middleBanerForms/bannerMenu';
import React, { Suspense } from 'react';

const BannerLayout = ({children}) => {
    return (
        <div>
            <div><BannerMenu /></div>
            <div>
               
                {children}
               
            </div>
        </div>
    );
};

export default BannerLayout;