


import ProductMenu from '@/components/dashboard/product/ProductMenu';
import React, { Suspense } from 'react';

const ProductLayout = ({children}) => {
    return (
        <div>
            <div>
                <ProductMenu/>
            </div>
            <div>
               
                {children}
               
            </div>
        </div>
    );
};

export default ProductLayout;