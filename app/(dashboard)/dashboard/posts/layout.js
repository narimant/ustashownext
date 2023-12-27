

import PostMenu from '@/components/dashboard/post/PostMenu';
import React, { Suspense } from 'react';

const BannerLayout = ({children}) => {
    return (
        <div>
            <div>
                <PostMenu />
            </div>
            <div>
               
                {children}
               
            </div>
        </div>
    );
};

export default BannerLayout;