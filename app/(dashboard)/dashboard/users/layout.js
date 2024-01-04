


import UserMenu from '@/components/dashboard/users/UserMenu';
import React, { Suspense } from 'react';

const BannerLayout = ({children}) => {
    return (
        <div>
            <div>
                <UserMenu />
            </div>
            <div>
               
                {children}
               
            </div>
        </div>
    );
};

export default BannerLayout;